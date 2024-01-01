const fizzBuzz = (n) => {
    if (n % 3 == 0 && n % 5 == 0) {
        console.log("FizzBuzz");
    } else if (n % 3 == 0) {
        console.log("Fizz");
    } else if (n % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }
};

// Exemplos de uso
fizzBuzz(3);  // Saída: Fizz
fizzBuzz(5);  // Saída: Buzz
fizzBuzz(15); // Saída: FizzBuzz
fizzBuzz(7);  // Saída: 7
