// Example 1:
// In general you should prefer nonstatic methods to static methods

HourlyPayCalculator.calculatePay(employee, overtimeRate);

// BAD: At first, it seems like a reasonable function
// It does not operate on any particular object and gets all it's data
// from it's arguments
// However there is a reasonable chance that we'll want this function to be polymorphic
// So in this case the function should not be static

class Employee {
  constructor(overtimeRate) {
    this.overtimeRate = overtimeRate;
  }

  calculatePay() {
    return this.overtimeRate * 100;
  }
}

// GOOD

//---------------------------------------------------------------------------

// Example 2:
// One of the more powerful ways to make a program readable is to
// break the calculations up into intermediate values
// that are held in variables with meaningful names

function matchLine(line) {
  if (headerPattern.matcher(line).find()) {
    headers.put(
      headerPattern.matcher(line).group(1).toLowerCase(),
      headerPattern.matcher(line).group(1)
    );
  }
}

// This is hard to read, but it can made more readable by
// adding intermediate values that are held in variables

function matchLine(line) {
  const match = headerPattern.matcher(line);
  if (match.find()) {
    const key = match.group(1);
    const value = match.group(2);
    headers.put(key.toLowerCase(), value);
  }
}

//---------------------------------------------------------------------------

// Example 3:
// The dependent module should not make assumptions about the module it depends upon
// Rather it should explicitly ask that module for all the information it depends upon

class HourlyReporter {
  constructor(formatter) {
    this.formatter = formatter;
    this.page = [];
    this.PAGE_SIZE = 55;
  }

  generateReport(employees) {
    for (const e of employees) {
      this.addLineItemToPage(e);
      if (this.page.length == this.PAGE_SIZE) this.printAndClearItemList();
    }
  }

  printAndClearItemList() {
    this.formatter.format(this.page);
    this.page = [];
  }
}

// BAD: HourlyReporter depends on the fact that
// HourlyReportFormatter can deal with page sizes of 55
// If some implementation of HourlyReportFormatter could not deal with such sizes,
// then there would be an error

class HourlyReporter {
  constructor(formatter) {
    this.formatter = formatter;
    this.page = [];
    this.PAGE_SIZE = 55;
  }

  generateReport(employees) {
    for (const e of employees) {
      this.addLineItemToPage(e);
      if (this.page.length == this.formatter.getMaxPageSize())
        this.printAndClearItemList();
    }
  }

  printAndClearItemList() {
    this.formatter.format(this.page);
    this.page = [];
  }
}

// GOOD
