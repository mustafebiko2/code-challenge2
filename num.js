// Function to generate an array of numbers between two given numbers
const generateArray = (start, end) => Array.from({ length: Math.abs(end - start) + 1 }, (_, i) => start < end ? start + i : start - i);

// Example usage:
console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
