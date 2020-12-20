// Example 1:
// Try to avoid providing two arguments which have no natural cohesion nor a natural ordering

writeField(name);

// GOOD: easy to understand

writeField(outputStream, name);

// BAD: Less clear, try to reduce it to one argument
// For example, writeField can be a method of outputStream

class OutputStream {
  constructor(stream) {
    this.stream = stream;
  }
  writeField(name) {
    this.stream.name = name;
    // ...
  }
}
