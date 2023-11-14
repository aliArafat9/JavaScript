var createHelloWorld = function() {
    return function() {
        return "Hello World";
    }
};

// Call the functions
var helloWorldFunction = createHelloWorld();
var result = helloWorldFunction();

// Print the result
console.log(result);