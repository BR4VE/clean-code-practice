// Example 1:
// Temporal couplings are often necessary, but you should not hide the coupling
// Structure the arguments of your functions that the order
// in which they should be called is obvious

class MoogDiver {
  constructor() {
    this.gradient = null;
    this.splines = null;
  }

  dive(reason) {
    this.saturateGradient();
    this.reticulateSplines();
    this.diveForMoog(reason);
  }
}

// BAD: The order of the three functions is important
// Unfortunately, the code does not enforece this temporal coupling

class MoogDiver {
  constructor() {
    this.gradient = null;
    this.splines = null;
  }

  dive(reason) {
    const gradient = this.saturateGradient();
    const splines = this.reticulateSplines(gradient);
    this.diveForMoog(splines, reason);
  }
}

// GOOD: This exposes the temporal coupling by creating a bucket brigade
