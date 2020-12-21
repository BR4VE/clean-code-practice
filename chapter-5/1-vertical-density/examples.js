// Example 1:
// Closely assoicated lines should appear vertically dense

class ReporterConfig {
  constructor(name) {
    /*
     * The class name of the reporter listener
     */
    this.m_className = name;

    /*
     * The properties of the reporter listener
     */
    this.m_properties = [];
  }
}

// BAD: Comments are useless and make code harder to read

class ReporterConfig {
  constructor(name) {
    this._className = name;
    this.m_properties = [];
  }
}
