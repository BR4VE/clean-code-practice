// Example 1:
// If you decide to write a comment,
// then spend the time necessary to make sure it is the best
// Do not mumble

class {
  loadProperties() {
    try {
      loadedProperties.load("stream.inu");
    } catch(e) {
      // No properties files means all defaults are loaded
    }
  }
}

// BAD: The comment inside catch block does not mean anything

//--------------------------------------------------------------------------------

// Example 2:
// Do not write redundant comments that does not justify the code,
// or provide intent or rationale

class ContainerBase {
  constructor() {
    /**
     * The processor delay for this component
     */  
    this.backgroundProcessorDelay = -1;
    
    /**
     * The lifecycle event support for this component
     */  
    const lifecycle = new LifecycleSupport(this);
  }
}

// BAD: These comments serve only to clutter and obscure the coe
// They serve no documentary purpose at all

//--------------------------------------------------------------------------------

// Example 3:
// Refactor the bad commented code into more readable, easy to understand code

class GeneratePrimes {
  /**
   * @param maxValue is the generation limit
   */
  static generatePrimes(maxValue) {
    if(maxValue >= 2) { // the only valid case
      // declerations
      const s = maxValue + 1; // size of array
      const f = new Array(s);
      let i;
      // initialize array to true;
      for(i = 0; i < s; i++) {
        f[i] = true;
      }

      // get rid of known non-primes
      f[0] = f[1] = false;

      // sieve
      let j;
      for(i = 2;i < Math.sqrt(s) + 1; i++) {
        if(f[i]) { // if i is uncrosed, cross its multiples
          for(j = 2 * i; j < s; j += i) {
            f[j] = false; // multiple is not prime
          }
        }
      }

      // how many primes are there?
      let count = 0;
      for(i = 0; i < s; i++) {
        if(f[i]) {
          count++; // bump count
        }
      }
      const primes = new Array(count);

      // move the primes into the result
      for(i = 0, j = 0; i < s; i++) {
        if(f[i]) {  // if prime
          primes[j++] = i;
        }
      }

      return primes; // return the primes
    }
    else { // maxValue < 2
      return [null];
    } 
  }
}

// BAD: Some many comments and distrupting code

class PrimeGenerator {
  constructor() {
    this.crossedOut = [];
    this.result = [];
  }
  generatePrimes(maxValue) {
    if(maxValue < 2) return [null];
    else {
      this.uncrossIntegersUpTo(maxValue);
      this.crossOutMultiples();
      this.putUncrossedIntegersIntoResult();
      return this.result;
    }
  }

   uncrossIntegersUpTo(maxValue) {
    this.crossedOut = new Array(maxValue + 1);
    for(let i = 2; i < this.crossedOut.length; i++) {
      this.crossedOut[i] = false;
    }
  }

  crossOutMultiples() {
    const limit = this.determineIterationLimit();
    for(let i = 2; i <= limit; i++) {
      if(this.notCrossed(i)) {
        this.crossedOutMultiplesOf(i);
      }
    }
  }

  determineIterationLimit() {
    // Every multiple in the aray has a prime factor that
    // is less than or equal to the root of the array size
    // so we don't have to cross out multiple of numbers
    // larger than that root
    const iterationLimit = Math.sqrt(this.crossedOut.length);
    return Math.floor(iterationLimit);
  }

  crossOutMultiplesOf(i) {
    for(let multiple = 2 * i; multiple < this.crossedOut.length; multiple += i) {
      this.crossedOut[multiple] = true;
    }
  }

  notCrossed(i) {
    return this.crossedOut[i] == false;
  }
}

//--------------------------------------------------------------------------------



