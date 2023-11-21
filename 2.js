function isPrime(number) {
    // Check if the number is less than 2, as 0 and 1 are not prime
    if (number < 2) {
        return false;
    }

    // Loop from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any other number, it's not prime
        if (number % i === 0) {
            return false;
        }
    }

    // If no divisors are found, the number is prime
    return true;
}

// Example usage:
const numberToCheck = 1101;
if (isPrime(numberToCheck)) {
    console.log(`${numberToCheck} is a prime number.`);
} else {
    console.log(`${numberToCheck} is not a prime number.`);
}
