/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

const guestName = "Mango";
const roomNumber = "12a";

const str1 = "Some text";
const str2 = "Some text. I'm Groot";
const str3 = `Hello ${guestName}. Your room is ${roomNumber}!`;
// console.log("str3:", str3);

const message =
  "Hello" + " " + guestName + "." + " " + "Your room is " + roomNumber + "!";
// console.log(message);

// String()

// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

const userInput = +3; // унарний
// let number = -3;

console.log("5" + 3); // "53" // бінарний
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"

// навіть якщо наприклад 3 + false + рядок , воно рахує false за 1 ?

// console.log((3 + true) * "55"); // "455"
