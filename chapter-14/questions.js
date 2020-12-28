// READ BEFORE QUESTIONS
// Below class has been refactored and cleaned up throughout the chapter
// and claimed that the last version of it (below one) easy to understand and dry

class Args {
  constructor(schema, args = []) {
    this.marshallers = new Map();
    this.argsFound = new Set();
    this.currentArgument = null;

    this.parseSchema(schema);
    this.parseArgumentStrings(args);
  }

  parseSchema(schema) {
    for (const element of schema.split(",")) {
      if (element.length > 0) this.parseSchemaElement(element.trim());
    }
  }

  parseElementSchema(element) {
    const elementId = element[0];
    const elementTail = element.substring(1);
    this.validateSchemaElementId(elementId);

    if (elementTail.length == 0)
      this.marshallers.set(elementId, new BooleanArgumentMarshaller());
    else if (elementTail == "*")
      this.marshallers.set(elementId, new StringArgumentMarshaller());
    else if (elementTail == "#")
      this.marshallers.set(elementId, new IntegerArgumentMarshaller());
    else if (elementTail == "##")
      this.marshallers.set(elementId, new DoubleArgumentMarshaller());
    else if (elementTail == "[*]")
      this.marshallers.set(elementId, new StringArrayArgumentMarshaller());
    else throw new ArgsError(INVALID_ARGUMENT_FORMAT, elementId, elementTail);
  }

  validateElementSchemaElementId(elementId) {
    if (Character.isLetter(elementId)) {
      throw new ArgsError(INVALID_ARGUMENT_NAME, elementId, null);
    }
  }

  parseArgumentStrings(argsList) {
    for (const currentArgument of argsList) {
      this.currentArgument = currentArgument;
      const argString = currentArgument.next();
      if (argsString.startsWith("-")) {
        this.parseArgumentChracters(argString.substring(1));
      } else {
        currentArgument.previous();
        break;
      }
    }
  }

  parseArgumentCharacters(argChars) {
    for (let i = 0; i < argChars.length(); i++) {
      this.parseArgumentCharacter(argChars.charAt(i));
    }
  }

  parseArgumentCharacters(argChar) {
    const m = this.marshallers.get(argChar);
    if (m == null) {
      throw new ArgsError(UNEXPECTED_ARGUMENT, argChar, null);
    } else {
      this.argsFound.set(argChar);
      try {
        m.set(this.currentArgument);
      } catch (e) {
        throw e;
      }
    }
  }

  has(arg) {
    return this.argsFound.has(arg);
  }

  nextArgument() {
    return this.currentArgument.nextIndex();
  }

  getBoolean(arg) {
    return BooleanArgumentMarshaler.getValue(this.marshallers.get(arg));
  }

  getString(arg) {
    return StringArgumentMarshaler.getValue(this.marshallers.get(arg));
  }

  getInt(arg) {
    return IntegerArgumentMarshaler.getValue(this.marshallers.get(arg));
  }

  getDouble(arg) {
    return DoubleArgumentMarshaler.getValue(this.marshallers.get(arg));
  }

  getStringArray(arg) {
    return StringArrayArgumentMarshaler.getValue(this.marshallers.get(arg));
  }
}

// However, I have couple doubts about its clarity:

//------------------------------------------------------------------------

// Question 1:
// Would not it be better if creating a Marshaller class logic inside parseElementSchema were moved to some other function,
// possibly to a factory

// From my perspective by applying that logic directly inside parseElementSchema, we break our single responsbility principle
// I suggest that the following implementation would be cleaner

class ArgumentMarshallerFactory {
  static createMarshaller(marshallerChar) {
    if (marshallerChar.length == 0) return new BooleanArgumentMarshaller();

    switch (marshallerChar) {
      case "*":
        return new StringArgumentMarshaller();

      case "#":
        return new IntegerArgumentMarshaller();

      case "##":
        return new DoubleArgumentMarshaller();

      case "[*]":
        return new StringArrayArgumentMarshaller();

      default:
        throw new ArgsError(INVALID_ARGUMENT_FORMAT, marshallerChar);
    }
  }
}

class Args {
  parseElementSchema(element) {
    const elementId = element[0];
    const elementTail = element.substring(1);
    this.validateSchemaElementId(elementId);

    this.marshallers.set(
      elementId,
      ArgumentMarshallerFactory.createMarshaller(elementTail)
    );
  }
}

// By doing that we also remove the duplication of this.marshaller.set function

//------------------------------------------------------------------------

// Question 2:
// Would not it be better if all of the get functions (getBoolean, getInt, etc.) were merged under one get function by using
// the same factory we created above

class Args {
  getArg(arg) {
    const argMarshaller = ArgumentMarshallerFactory.createMarshaller(arg);
    return argMarshaller.getValue(this.marshallers.get(arg));
  }
}

// I need to admit that we loose some part of our explicitness
