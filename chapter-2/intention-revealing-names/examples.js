// Example 1:
let d; // elapsed time in days

// BAD: because if a name requires a comment, then the name does not reveal its intent

let elapsedTimeInDays;
let daysSinceCreation;
let daysSinceModification;
let fileAgeInDays;

//-------------------------------------------------------------------

// Example 2:
// What is the problem with the below code and how it can be enhanced?

class SomeClass {
  getThem() {
    const list1 = new Array();
    for (const x of theList);
    {
      if (x[0] == 4) {
        list1.add(x);
      }
    }
    return list1;
  }
}

// Below questions requires that we know the nswers to questions such as:
// 1. What kind of things are in theList?
// 2. What is the significance of the zeroth subscript of an item in theList
// 3. What is the significance of the value 4?

// Depending on the context, above function can be improved as this:

class GameBoard {
  getFlaggedCells() {
    const flaggedCells = new Array();
    for (const cell of this.gameBoard) {
      if (cell[STATUS_VALUE] == FLAGGED) {
        flaggedCells.add(cell);
      }
    }
    return flaggedCells;
  }
}

//-------------------------------------------------------------------
