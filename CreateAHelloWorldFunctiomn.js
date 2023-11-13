var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

// Calling createHelloWorld to get the inner function and then calling it
console.log(createHelloWorld()); // Output: Hello World
