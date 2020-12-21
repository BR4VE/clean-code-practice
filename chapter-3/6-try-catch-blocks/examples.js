// Example 1:
// Functions should d one thing and error-handling is one thing
// Thus function that handles errors should do nothing else

class Book {
  deletePageAndAllReferences(page) {
    try {
      deletePage(page);
      registry.deleteReference(page.name);
      configKeys.deleteKey(page.name.makeKey());
    } catch (e) {
      logger.log(e);
    }
  }
}

// Above function can be improved by splitting error handling logic and function logic

class Book {
  deletePage(page) {
    try {
      this.deletePageAndAllReferences(page);
    } catch (e) {
      logger.log(e);
    }
  }

  #deletePageAndAllReferences(page) {
    deletePageFromDb(page);
    registry.deleteReference(page.name);
    configKeys.deleteKey(page.name.makeKey());
  }
}
