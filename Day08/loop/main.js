// filename: loopsDemo.js

// 1. For Loop
console.log('For Loop Example:');
for (let i = 0; i < 5; i++) {
    console.log('Iteration number: ' + i);
}

console.log('');

// 2. While Loop
console.log('While Loop Example:');
let j = 0;
while (j < 5) {
    console.log('Iteration number: ' + j);
    j++;
}

console.log('');

// 3. Do...While Loop
console.log('Do...While Loop Example:');
let k = 0;
do {
    console.log('Iteration number: ' + k);
    k++;
} while (k < 5);

console.log('');

// 4. For...of Loop (for iterating over iterable objects like arrays)
console.log('For...of Loop Example:');
const array = ['apple', 'banana', 'cherry'];
for (const fruit of array) {
    console.log(fruit);
}

console.log('');

// 5. For...in Loop (for iterating over the properties of an object)
console.log('For...in Loop Example:');
const object = { name: 'Alice', age: 25, city: 'New York' };
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(`${key}: ${object[key]}`);
    }
}
