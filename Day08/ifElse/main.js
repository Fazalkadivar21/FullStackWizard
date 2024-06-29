// If-Else Statement
let num = 10;
if (num > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}

// If-Else Ladder
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Nested If
let age = 25;
if (age >= 18) {
    if (age >= 21) {
        console.log("You are an adult and you can drink alcohol.");
    } else {
        console.log("You are an adult but you cannot drink alcohol.");
    }
} else {
    console.log("You are not an adult.");
}