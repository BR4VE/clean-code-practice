// Example 1:
// Make your variables searchable

function fn() {
  let s = 0;
  for (let j = 0; j < 34; j++) {
    s += (t[j] * 4) / 5;
  }
}
// BAD: Constants in that function are not searchable that creates two problems:
// 1. What 4, 5, 34 means
// 2. What is going to happen if we need to change the constant value which those constants represent
// in that case, we need to search for all the 4,5, 34s in the code and replace them

function fn() {
  const realDaysPerIdealDay = 4;
  const WORK_DAYS_PER_WEEK = 5;
  let sum = 0;
  for (let j = 0; j < NUMBER_OF_TASKS; j++) {
    const realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
    const realTaskWeeks = realDays / WORK_DAYS_PER_WEEK;
    sum += realTaskWeeks;
  }
}

//-------------------------------------------------------------------
