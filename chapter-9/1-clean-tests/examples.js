// Example 1: Keep your tests clean like you keep your production code
// and apply build-operate-check (or arragen-act-assert)

class PageTest {
  testGetPageHierarchyAsXml() {
    crawler.addPage(root, PathParser.parse("PageOne"));
    crawler.addPage(root, PathParser.parse("PageOne.ChildOne"));
    crawler.addPage(root, PathParser.parse("PageTwo"));

    request.setResource("root");
    request.addInput("type", "pages");
    const responder = new SerializedPageResponder();
    const response = responder.makeResponse(new FitNesseContext(root), request);
    const xml = response.getContent();

    assertEquals("text/xml", response.getContentType());
    assertSubString("<name>PageOne</name>", xml);
    assertSubString("<name>PageTwo</name>", xml);
    assertSubString("<name>ChildOne</name>", xml);
  }
}

// BAD: There are repetitive code here and some of the details (like parsing page)
// are irrelevant to this test

class PageTest {
  testGetPageHierarchyAsXml() {
    makePages("PageOne", "PageOne.ChildOne", "PageTwo");

    submitRequest("root", "type:pages");

    assertResponseIsXML();
    assertResponseContains(
      "<name>PageOne</name>",
      "<name>PageTwo</name>",
      "<name>ChildOne</name>"
    );
  }
}

// GOOD: we do not have to understand irrelevant details and the code became
// much more readable
