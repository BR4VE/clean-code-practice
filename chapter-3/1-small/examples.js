// Example 1:
// Blocks within if statements, else statements,
// while statements, and so on should be one line long

class Page {
  renderPageWithSetupsAndTeardowns(pageData, isSuite) {
    if (isTestPage(pageData)) includeSetupAndTeardownPages(pageData, isSuite);
    return pageData.getHtml();
  }
}

//------------------------------------------------------------------------
