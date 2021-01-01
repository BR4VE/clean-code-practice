// Example 1:
// Refactor the function class below

class ComparsionCompactor {
  constructor(contextLength, expected, actual) {
    this.ELLIPSIS = "...";
    this.DELTA_START = "[";
    this.DELATA_END = "]";

    this.fContextLength = contextLength;
    this.fExpected = expected;
    this.fActual = actual;
    this.fPrefix = null;
    this.fSuffix = null;
  }

  compact(message) {
    if (
      this.fExpected == null ||
      this.fActual == null ||
      this.areStringsEqual()
    )
      return Assert.format(message, this.fExpected, this.fActual);

    this.findCommonPrefix();
    this.findCommonSuffix();
    const expected = this.compactString(this.fExpected);
    const actual = this.comapctString(this.fActual);
    return Assert.format(message, this.fExpected, this.fActual);
  }

  compactString(source) {
    let result = `${this.DELTA_START}${source.substring(
      this.fPrefix,
      source.length - this.fSuffix + 1
    )}${this.DELTA_END}`;
    if (this.fPrefix > 0) {
      result = this.computeCommonPrefix() + result;
    }
    if (this.fSuffix > 0) {
      result = result + this.computeCommonSuffix();
    }
    return result;
  }

  findCommonPrefix() {
    this.fPrefix = 0;
    const end = Math.min(this.fExpected.length, this.fActual.length);
    for (; this.fPrefix < end; this.fPrefix++) {
      if (this.fExpected[this.fPrefix] != this.fActual[this.fPrefix]) break;
    }
  }

  findCommonSuffix() {
    const expectedSuffix = this.fExpected.length - 1;
    const actualSuffix = this.fActual.length - 1;
    for (
      ;
      actualSuffix >= this.fPrefix && expectedSuffix >= this.pPrefix;
      actualSuffix--, expectedSuffix--
    ) {
      if (this.fExpected[expectedSuffix] != this.fActual[actualSuffix]) break;
    }
    this.fSuffix = this.fExpected.length - expectedSuffix;
  }

  computeCommonPrefix() {
    return (
      (this.fPrefix > this.fContextLength ? this.ELLIPSIS : "") +
      this.fExpected.substring(
        Math.max(0, this.fPrefix - this.fContextLength),
        this.fPrefix
      )
    );
  }

  computeCommonSuffix() {
    const end = Math.min(
      this.fExpected.length - this.fSuffix + 1 + this.fContextLenght,
      this.fExpected.length
    );
    return this.fExpected.substring(
      this.fExpected.length - this.fSuffix + 1,
      end
    ) +
      this.fExpected.length -
      this.fSuffix +
      1 <
      this.fExpected.length - this.fContextLength
      ? this.ELLIPSIS
      : "";
  }

  areStringsEqual() {
    return this.fExpected == this.fActual;
  }
}

// Change 1:
// The first thing we can change is the "f" prefix of member variables
// Today's environments make this kind of scope encoding redundant
// So lets eliminate all the f's

this.contextLength;
this.expected;
this.actual;
this.prefix;
this.suffix;

// Change 2:
// Next we have an unencapsulated conditional at the beginning of the compact function
// This conditional should be encapsulated to make our intent clear

class ComparsionCompactor {
  // ...
  compact(message) {
    if (this.shouldNotCompact())
      return Assert.format(message, this.expected, this.actual);
    // ...
  }

  shouldNotCompact() {
    return (
      this.expected == null || this.actual == null || this.areStringsEqual()
    );
  }
}

// Change 3:
// After we change the names from fExpected to expected (and others) we notice that there are variables in the compact function that have the same names
// We should make the names unambigious

class ComparsionCompactor {
  // ...
  compact(message) {
    // ...
    const compactExpected = this.compactString(this.expected);
    const compactActual = this.compactString(this.actual);
  }
}

// Change 4:
// Negatives are slightly harder to understand than positives
// So let's turn that if statement on its head and invert the sense of the conditional

class ComparsionCompactor {
  // ...
  compact(message) {
    if (this.canBeCompacted()) {
      this.findCommonPrefix();
      // ...
    }
  }

  canBeCompacted() {
    return (
      this.expected != null && this.actual != null && !this.areStringsEqual()
    );
  }
}

// Change 5:
// The name of the function is strange
// Although it does compact the strings, it actually might not compact the strings if canBeCompacted returns false
// So naming this function compact hides the side effect of the error check
// Notice also that the function returns a formatted message, not just the compacted strings
// So the name of the function should really be formatCompactedComparion

class ComparsionCompactor {
  // ...
  formatCompactedComparsion(message) {
    // ...
  }
}

// Change 6:
// The body of the if statement is where the true compacting of the expected and
// actual strings is done
// We should extract that as a method named compactExpectedAndActual
// However, we want the formatCompactedComparison function to do all the formatting
// The compact... function should do nothing but compacting

class ComparisonCompactor {
  constructor() {
    // ...
    this.compactExpected = null;
    this.compactActual = null;
  }

  formatCompactedComparision(message) {
    if (this.canBeCompacted()) {
      this.compactExpectedAndActual();
      // ...
    }
  }

  compactExpectedAndActual() {
    this.findCommonPrefix();
    this.findCommonSuffix();
    this.compactExpected = this.compactString(this.expected);
    this.compactActual = this.compactString(this.actual);
  }
}

// Change 7-8:
// Notice that this required us to promote compactExpected and compactActual to member variables
// I don't like the way that the last two lines of the new function return variables, but the first two don't
// They are not using consistent conventions
// So we should change findCommonPrefix and findCommonSuffix to return the prefix and suffix values

// Careful inspection of findCommonSuffix exposes a hidden temporal coupling; it depends on the fact that
// prefixIndex is calculated by findCommonPrefix
// If these two functions were called out of order, there would be a difficult debugging session ahead
// So, to expose this temporal coupling, let's have findCommonSuffix take the prefixIndex as an argument

class ComparsionCompactor {
  compactExpectedAndActual() {
    this.prefixIndex = this.findCommonPrefix();
    this.suffixIndex = this.findCommonSuffix(this.prefixIndex);
    // ...
  }
}

// Change 9:
// I'm not really happy with this
// The passing of the prefixIndex argument is a bit arbitrary
// It works to establish the ordering but does nothing to explain the need for that ordering
// Another programmer might undo what we have done because there's no indication that the parameter is really needed

class ComparisonCompactor {
  compactExpectedAndActual() {
    this.findCommonPrefixAndSuffix();
    this.compactExpected = this.compactString(this.expected);
    this.compactActual = this.compactString(this.actual);
  }

  findCommonPrefixAndSuffix() {
    this.findCommonPrefix();
    const suffixLength = 1;
    for (; this.suffixOverlapsPrefix(suffixLength); suffixLength++) {
      if (
        this.charFromEnd(this.expected, suffixLength) !=
        this.charFromEnd(this.actual, this.suffixLength)
      )
        break;
    }
    this.suffixIndex = suffixLength;
  }

  charFromEnd(s, i) {
    return s[s.length - 1];
  }

  suffixOverlapsPrefix(suffixLength) {
    return (
      this.actual.length - this.suffixLength < this.prefixLength ||
      this.expectedLength - suffixLength < this.prefixLength
    );
  }
}
