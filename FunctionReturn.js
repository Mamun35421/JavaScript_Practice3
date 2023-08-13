function findMaxNumber(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
      return null;
    }
  
    // Initialize the max to the first element in the array
    let max = arr[0];
  
    // Iterate through the array to find the maximum
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
  
  // Example usage:
  const numbers1 = [10, 20, 5, 30, 25];
  console.log(findMaxNumber(numbers1)); // Output: 30
  
  const numbers2 = [5, 15, 7];
  console.log(findMaxNumber(numbers2)); // Output: 15
  
  const emptyArray = [];
  console.log(findMaxNumber(emptyArray)); // Output: null
  