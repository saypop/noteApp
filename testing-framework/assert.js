var assert = {
  isTrue: function(description, assertionToCheck) {
    if (!assertionToCheck) {
      console.log("Assertion failed: " + description + " is not truthy");
    } else {
      console.log("Assertion passed: " + description + " is truthy")
    };
  }
};
