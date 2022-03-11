let a = 10;
let b = 6;

// basic operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);

// Remainder
console.log(a % b);

// uninary operators
console.log(a++);
console.log(a);
console.log(++a);
console.log(a--);
console.log(a);
console.log(--a);

// comparism
// <, >, ==, <=, >=, ===(use threeple ===s)
// let a = 10;
// let b = 6;
let c = "10";
console.log(a < b);
console.log(a > b);

console.log(a === b);
console.log(a === c);

// control flow
// if (Anapuna) {
//     run code if condition is true
// }else if(A1){
//     buy A1 salt
// }else if(U2){
//     buy u2 salt
// }

let score = 80;
if (score >= 80) {
  console.log("You had A");
} else if (score >= 75) {
  console.log("You had B+");
}

let marks = 70;
if (marks >= 70) {
  console.log("You had B");
} else if (marks >= 65) {
  console.log("You had c+");
} else if (marks >= 60) {
  console.log("You had C");
} else if (marks >= 55) {
  console.log("You had D+");
} else if (marks >= 50) {
  console.log("You had D");
} else {
  console.log("You failed");
}

// switch case
const gender = "male";
switch (gender) {
  case "male":
    console.log("Go to the male wash room");
    break;
  case "female":
    console.log("Go to the female wash room");
    break;
  default:
    console.log("no washroom for you");
    break;
}

// the (for) loop
// for(start; end; increment){
//     code
// }
for (i = 0; i < 10; i++){
    console.log(i);
}

for(let count = 1; count < 10; count++){
    console.log(count);
}

// while loop
let count = 1;
while (count < 10){
  console.log(count);
  count++
}







