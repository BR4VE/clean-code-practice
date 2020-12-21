// Example 1:
// If one function calls another, they should be vertically close,
// and the caller should be above the callee, if at all possible

class WikiPageResponder {
  makeResponse(context, request) {
    const pageName = this.getPageNameOrDefault(request, "FrontPage");
    this.loadPage(pageName, context);
  }

  getPageNameOrDefault(request, defaultPageName) {
    const pageName = request.getResource();
    if (pageName.isBlank()) pageName = defaultPageName;

    return pageName;
  }

  loadPage(resource, context) {
    const path = PathParser.parse(resource);
    this.loadPageResources(path);
  }

  loadPageResources(pathToPage) {
    // ...
  }
}

// As it can be seen in the example, callers are above callees
