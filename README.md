## Array Utility Functions
A simple npm package providing various utility functions to work with arrays efficiently.

# Installation
You can install this package via npm:

npm i array-utility-functions


# Functionalities
1. `sumOfArray(arr)`
Calculates the sum of all elements in the array.

2. `multipleOfArray(arr)`
Calculates the product of all elements in the array.

3. `sortArrayByAscending(arr)`
Sorts the array in ascending order.

4. `sortArrayByDescending(arr)`
Sorts the array in descending order.

5. `binarySearch(arr, num)`
Performs binary search on the sorted array and returns the index of the target number if found, otherwise returns -1.

6. `largestNumInArray(arr)`
Finds the largest number in the array.

7. `removeDuplicateElements(arr)`
Removes duplicate elements from the array and returns a new array with unique elements.


# Usage

const { 
    sumOfArray, 
    multipleOfArray, 
    sortArrayByAscending, 
    sortArrayByDescending, 
    binarySearch, 
    largestNumInArray, 
    removeDuplicateElements 
} = require('array-utility-functions');

const numbers = [1, 2, 3, 4, 5];

console.log(sumOfArray(numbers)); // Output: 15
console.log(multipleOfArray(numbers)); // Output: 120
console.log(sortArrayByAscending(numbers)); // Output: [1, 2, 3, 4, 5]
console.log(sortArrayByDescending(numbers)); // Output: [5, 4, 3, 2, 1]
console.log(binarySearch(numbers, 3)); // Output: 2
console.log(largestNumInArray(numbers)); // Output: 5
console.log(removeDuplicateElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
Contributing

Contributions are welcome! Feel free to submit issues or pull requests on the GitHub repository.