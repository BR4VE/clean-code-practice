// Question 1:
// In the change 4 of example 1, we change the if statement
// from negative to positve to increase readability.
// However at the same time we encapsulate some of our code, and I believe
// that results in messier look.
// Should not we try to avoid from encapsulating functions/statements inside if
// blocks as much we can?

class ComparsionCompactor {
  // ...
  compact(message) {
    if (this.canBeCompacted()) {
      this.findCommonPrefix();
      // ...
      if (this.canBeSeparated()) {
        // more blocks lead o uglier look
        // ...
      }
    }
  }
}
