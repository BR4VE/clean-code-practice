// Example 1:
// If you are tempted to reutrn null from a method, consider throwing an object
// or returning special case object instead

class Store {
  registerItem(item) {
    if (item != null) {
      const registry = persistentStore.getItemRegistry();
      if (registry != null) {
        const existing = registry.getItem(item.getID());
        existing.register(item);
      }
    }
  }
}

// BAD: What is going to happen if writer misses one null check?
// The code will throw an exception which will
// probably be not caught by any part of thecode

//--------------------------------------------------------------------------

// Example 2:
// In may cases, special objects are an easy remedy

const employees = getEmployees();
if (employees != null) {
  for (const e of employees) {
    totalPay += e.getPay();
  }
}

// BAD: getEmployees can return null, it can be changed to it returns an empty array

const employees = getEmployees();
for (const e of employees) {
  totalPay += e.getPay();
}
