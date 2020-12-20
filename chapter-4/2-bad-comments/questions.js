// Question 1:
// Should we put mandated comments for documentation/type checking purposes
// The opposite has been adviced in the book

class {
  /**
   *
   * @param title The title of the CD
   * @param author The author of the CD
   */
  addCd(title, author) {
    const cd = new CD();
    cd.title = title;
    cd.author = author;
  }
}

