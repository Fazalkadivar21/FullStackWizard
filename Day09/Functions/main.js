// filename: functionsDemo.js

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log('Function Declaration Example:');
console.log(greet('Alice'));

console.log('');

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log('Function Expression Example:');
console.log('2 + 3 = ' + add(2, 3));

console.log('');

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log('Arrow Function Example:');
console.log('4 * 5 = ' + multiply(4, 5));

console.log('');

// 4. Immediately Invoked Function Expression (IIFE)
console.log('Immediately Invoked Function Expression (IIFE) Example:');
(function() {
    console.log('This function runs immediately!');
})();

console.log('');

// 5. Function with Default Parameters
function greetWithDefault(name = 'stranger') {
    return `Hello, ${name}!`;
}
console.log('Function with Default Parameters Example:');
console.log(greetWithDefault());
console.log(greetWithDefault('Bob'));

console.log('');

// 6. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log('Rest Parameters Example:');
console.log('Sum of 1, 2, 3, 4, 5 = ' + sum(1, 2, 3, 4, 5));

console.log('');

// 7. Callback Function
function processUserInput(callback) {
    const name = 'Charlie';
    callback(name);
}
console.log('Callback Function Example:');
processUserInput(function(name) {
    console.log(`Hello, ${name}!`);
});
