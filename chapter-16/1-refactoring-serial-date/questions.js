// Question 1:
// In some parts of the refactoring I noticed some of the function names were
// ambiguous

class DateOrder {
  lastDayOfMonth(month, year) {
    if (month == Month.FEBRUARY && this.isLeapYear(year))
      return month.lastDay() + 1;
    else return month.lastDay();
  }
}

// Here I believe that the name lastDay() leads to ambiguity
// without seeing the context it is used, saying what lastDay method does (from my perspective)
// it's hard to tell

month.lastDay();

// Is it gettingthe last day of the month?
// or is it checking if the current date inside that month is the last date

// In that case it seems more logical to think it is the first case however
// I belive function/method names should include verbs (getLastDay)
