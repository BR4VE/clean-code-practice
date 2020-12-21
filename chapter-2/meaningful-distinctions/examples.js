// Example 1:
// Number-series naming (a1, a2 .. aN) are noninformative

class Alphabet {
  copyChars(w1, w2) {
    for (let i = 0; i < w1.length; i++) {
      w2[i] = w1[i];
    }
  }
}
// BAD: because w1 and w2 does not mean anything at the first sight

class Alphabet {
  copyChars(source, destination) {
    // ...
  }
}

//-------------------------------------------------------------------

// Example 2
// Distinguish names in such a way that the reader knows what the differences offer

getActiveAccount();
getActiveAccounts();
getActiveAccountInfo();

// BAD: What are the differnces between those?
