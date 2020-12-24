// Example: 1
// Every class should have one responsbility

class SuperDashboard extends JFrame {
  getLastFocusedComponent() {}
  setLastFocusedComponent() {}
  getMajorVersionNumber() {}
  getMinorVersionNumber() {}
  getBuildNumber() {}
}

// BAD: Think about the responsibilities of the SuperDashboard class
// If you wanted to describe its responsibilities, you would form a sentece which
// is similar to that: SuperDashbord provides an access to the component which
// last held the focus AND it also allows us to track version numbers

// You've used AND, that means there are more than once responsibility

class SuperDashboard extends JFrame {
  getLastFocusedComponent() {}
  setLastFocusedComponent() {}
}

class Versions {
  getMajorVersionNumber() {}
  getMinorVersionNumber() {}
  getBuildNumber() {}
}
