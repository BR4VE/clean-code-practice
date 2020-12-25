// Example 1:
// Creating a clean system requires the will to eliminate duplication,
// even in just a few lines of code

class Image {
  scaleToOneDimension(desiredDimension, imageDimension) {
    if (Math.abs(desiredDimension - imageDimension) < errorThreshold) return;
    let scalingFactor = desiredDimension / imageDimension;
    scalingFactor = Math.floor(scalingFactor * 100) * 0.01;

    const newImage = ImageUtilities.getScaledImage(
      image,
      scalingFactor,
      scalingFactor
    );
    this.image.dispose();
    System.gc();
    this.image = newImage;
  }

  rotate(degrees) {
    const newImage = ImageUtilities.getRotateImage(image, degrees);
    this.image.dispose();
    System.gc();
    this.image = newImage;
  }
}

// BAD: There are common parts, which can be extracted, in both functions

class Image {
  scaleToOneDimension(desiredDimension, imageDimension) {
    if (Math.abs(desiredDimension - imageDimension) < errorThreshold) return;
    let scalingFactor = desiredDimension / imageDimension;
    scalingFactor = Math.floor(scalingFactor * 100) * 0.01;

    this.replceImage(
      ImageUtilities.getScaledImage(image, scalingFactor, scalingFactor)
    );
  }

  rotate(degrees) {
    this.replaceImage(ImageUtilities.getRotratedImage(image, degrees));
  }

  replaceImage(newImage) {
    this.image.dispose();
    System.gc();
    this.image = newImage;
  }
}

//--------------------------------------------------------------------------------

// Example 2:
// Eliminate highler level duplications using template method

class VacationPolicy {
  accrueUSDivisionVacation() {
    // code to calculate vacation based on hours worked to date
    // ...
    // code to ensure vacation meets US minimums
    // ...
    // code to apply vacation to payroll record
  }

  accrueEDDivisionVacation() {
    // code to calculate vacation based on hours worked to date
    // ...
    // code to ensure vacation meets EU minimums
    // ...
    // code to apply vacation payroll record
  }
}

// BAD: The code across both methods is largely same

class VacationPolicy {
  accrueVacation() {
    this.calculateBaseVacationHours();
    this.alterForLegalMinimums();
    this.applyToPayroll();
  }

  calculateBaseVacationHours() {}
  alterForLegalMinimums() {}
  applyToPayroll() {}
}

class USVacationPolicy extends VacationPolicy {
  alterForLegalMinimums() {
    // US specific logic
  }
}

class EUVacationPolicy extends VacationPolicy {
  alterForLegalMinimums() {
    // EU specific logic
  }
}
