// Example 1:
// In every single test we should be testing a single concept

test("Add Months", () => {
  const d1 = SerialDate.createInstance(31, 5, 2004);

  const d2 = SerialDate.addMonths(1, d1);
  assertEquals(30, d2.getDayOfMonth());
  assertEquals(6, d2.getMonth());
  assertEquals(2004, d2.getYYYY());

  const d3 = SerialDate.addMonths(2, d1);
  assertEquals(31, d3.getDayOfMonth());
  assertEquals(7, d3.getMonth());
  assertEquals(2004, d3.getYYYY());
});

// BAD: We are testing multiple concepts in one test, they make the
// test harder to understand

test("Months Module", () => {
  describe("Add Months", () => {
    beforeAll(() => {
      const d1 = SerialDate.createInstance(31, 5, 2004);
    });

    it("Should make the day 30th when 1 month is added to a month which has 31 days", () => {
      const d2 = SerialDate.addMonths(1, d1);
      assertEquals(30, d2.getDayOfMonth());
      assertEquals(6, d2.getMonth());
      assertEquals(2004, d2.getYYYY());
    });

    it("Should make the day 31th when 2 months are added to a month which has 31 days", () => {
      const d3 = SerialDate.addMonths(2, d1);
      assertEquals(31, d3.getDayOfMonth());
      assertEquals(7, d3.getMonth());
      assertEquals(2004, d3.getYYYY());
    });
  });
});
