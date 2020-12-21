// Examples 1:
// It is sometimes tempting to break the indentation for short
// if, while, function statements. Don't.

class CommentWidget {
  render() {
    if (this.pageNumber == 0) this.renderDefaultPage();
  }
}

// BAD

class CommentWidget {
  render() {
    if (this.pageNumber == 0) {
      this.renderDefaultPage();
    }
  }
}
