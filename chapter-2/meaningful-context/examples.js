// Example 1:
// variables inside methods should belong to some meaningful context

class GuessStatistics {
  printGuessStatistics(candidate, count) {
    let number, verb, pluralModifier;

    if (count == 0) {
      number = "no";
      verb = "are";
    } else if (count == 1) {
      number = "1";
      verb = "is";
      pluralModifier = "";
    } else {
      number = Integer.toString(count);
      verb = "are";
      pluralModifier = "s";
    }

    let guessMessage = `There ${verb} ${number} ${canidate} ${pluralModifier}`;
    console.log(guessMessage);
  }
}
// BAD: When you first look at the method, the meanings of the variables are opaque

class GuessStatisticsMessage {
  constructor() {
    this.number = "";
    this.verb = "";
    this.pluralModifier = "";
  }

  make(candidate, count) {
    this.createPluralDependentMessageParts(count);
    return `There ${verb} ${number} ${canidate} ${pluralModifier}`;
  }

  createPluralDependentMessageParts(count) {
    if (count == 0) {
      this.thereAreNoLetters();
    } else if (count == 1) {
      thereIsOneLetter();
    } else {
      thereAreManyLetters(count);
    }
  }

  thereAreManyLetters(count) {
    this.number = String(count);
    this.verb = "are";
    this.pluralModifier = "s";
  }

  thereIsOneLetter() {
    this.number = "1";
    this.verb = "is";
    this.pluralModifier = "";
  }

  thereAreNoLetters() {
    this.number = "no";
    this.verb = "are";
    this.pluralModifier = "s";
  }
}

//-------------------------------------------------------------------
