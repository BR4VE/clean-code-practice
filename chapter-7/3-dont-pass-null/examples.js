// Example 1:
// Unless you are working with an API which expects you to pass null,
// you should avoid passing null in your code whenever possible

class Calculator {
  xProjection(p1, p2) {
    return (p2.x - p1.x) * 1.5;
  }
}

const calculator = new Calculator();
calculator.xProjection(null, new Point(1, 2));

// What is going to happen in the above code?
// It will throw an exception

// We might choose to write checks to validate the arguments however
// that uglifies the code and force us to write a new Error type

class Calculator {
  xProjection(p1, p2) {
    if (p1 == null || p2 == null) {
      throw new InvalidArgumentError(
        "Invalid argument for Calculator.Projection"
      );
    }
    return (p2.x - p1.x) * 1.5;
  }
}

// In most programming languages there is no good way to deal with a null that is passed by a caller accidentally
// Because that is the case, the rational approach is to forbid passing null by default
