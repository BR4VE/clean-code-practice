// Example 1:
// Procedural code (code using data structures) makes it easy to add new functions
// without changing the existing data structures
// OO code, on the other hand, makes it easy to add new classes without changing
// existing functions

// Procedural Code:

class Square {
  constructor(topLeft, side) {
    this.topLeft = topLeft;
    this.side = side;
  }
}

class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}

class Geometry {
  area(shape) {
    if (shape instanceof Square) {
      return shape.side * shape.side;
    } else if (shape instanceof Circle) {
      return Math.PI * shape.radius * shape.radius;
    }
  }
}

// For the above example, it is easy to add new functions without changing existing
// data structures

// OO Code:

class Square {
  constructor(topLeft, side) {
    this.topLeft = topLeft;
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// For the above example, it is easy to add new classes without changing
// existing functions
