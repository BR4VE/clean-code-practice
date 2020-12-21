// Example 1:
// Switch statements should be hidden behind an inheritance relationship,
// so that the rest of the system cannot see it and prevent repetitive code

class Employee {
  calculatePay(e) {
    switch (e.type) {
      case COMMISSIONED:
        return calculateCommissionedPay(e);
      case HOURLY:
        return calculateHourlyPay(e);
      case SALARIED:
        return calculateSalariedPay(e);

      default:
        break;
    }
  }
}

// BAD: There are several problems with that function
// However, the worst problem is that there are an unlimited number of other functions
// that will have the same structure
// For example: isPayday(e, date), delvierPay(e, pay)

class Employee {
  isPayday() {}
  calculatePay() {}
  deliverPay(pay) {}
}

class EmployeeFactory {
  makeEmployee(r) {
    switch (r.type) {
      case COMMISSIONED:
        return new CommissionedEmployee(r);
      case HOURLY:
        return new HourlyEmployee(r);
      case SALARIED:
        return new SalariedEmployee(r);

      default:
        break;
    }
  }
}

// The switch statment is burried under implementations so other functions does
// not have to check the type again

//------------------------------------------------------------------------
