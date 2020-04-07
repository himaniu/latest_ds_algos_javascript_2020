/**
 * Generates prime number with the help of generator
 */


const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;

        }
    }
    return true; // return number!== 1;
}

const primeNumberGenerator = function* (n) {
    let i = n;
    while (i >= 1) {
        if (isPrime(i))
            yield i;
        i--;
    }
}