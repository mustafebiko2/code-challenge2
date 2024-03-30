// Function to filter prime numbers from an array
const filterPrimes = arr => arr.filter(num => {
    if (num <= 1) return false; // Prime numbers must be greater than 1
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If a divisor is found, the number is not prime
    }
    return true; // If no divisor is found, the number is prime
  });
  

  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = filterPrimes(inputArray);
  console.log(primeNumbers); // Output: [2, 3, 5, 7]
  