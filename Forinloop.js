function printObjectProperties(obj) {
  // Check if the object is empty
  if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
    return;
  }

  // Iterate over the object properties
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(`${prop}: ${obj[prop]}`);
    }
  }
}

// Example usage:
const myObj = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

printObjectProperties(myObj);

// Output:
// name: John
// age: 30
// occupation: Engineer
