// Function to swap the case of each character in a string
const swapCase = str => str.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());


const inputString = 'The Quick Brown Fox';
const swappedString = swapCase(inputString);
// Output: 'tHE qUICK bROWN fOX'
   console.log(swappedString); 

