// Question 1:
// Should we avoid destructuring objects in scopes where there are multiple objects
// because if the function is long we might have hard times to track
// contexes of those variables

function calculateTotalPaid(user, ticket) {
  const { totalPaid, name } = user;
  const { price } = ticket;
  // Assume that the function is long...

  return totalPaid + price;
}

//-------------------------------------------------------------------

// Question 2:
// Are the method names inside example.js (for example thereAreNoLetters) well defined
// Earlier it has been said that (or shown in examples),
// it would be better if there is verb inside functions
