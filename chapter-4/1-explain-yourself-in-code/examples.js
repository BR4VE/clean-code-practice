// Example 1:
// In many cases it's simply a matter of creating a function
// which says the same thing as the comment you want to write

// Check to see if the employee is eligible for full benefits
if (employee.flags.includes(HOURLY_FLAG) && employee.age > 65) {
}

// BAD: We needed comments to explain our intent

if (employee.isEligibleForFullBenefits()) {
}

//--------------------------------------------------------------------------------

// Example: 2
// Simialar example to above

// does the module from the global list <mod> depend on the
// subsystem we are part of?
if (smodule.getDependSubsystems().contains(subsysMod.getSubSystem())) {
}

// BAD: This could be rephrased without the comment as

const moduleDependees = smodule.getDependSubsystems();
const ourSubSystem = subSysMod.getSubSystem();

if (moduleDependees.contains(ourSubSystem)) {
}
