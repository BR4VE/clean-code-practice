// Example 1:

// Does the experssion date.addDays(5) make it clear that
// the date object does not change and that a new instance of date is returned?
// Or does it erroneously imply that we are adding five days to the date object?

const date = DateFactory.makeDate(5, Month.DECEMBER, 1952);
date.addDays(7); // bump date by one week

// Someone reading this code would very likely just accept that addDays is changing the date object
// So we need a name that breaks this ambiguity

const date = oldDate.plusDays(5);

//-> Whereas the following doesn't read fluidly enough for a reader to simply accept that the date object is changed;

date.plusDays(5);
