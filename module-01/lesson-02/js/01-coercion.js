/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

let number;
// console.log("number:", number);

// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // Not a Number
// console.log(Number("Jacob")); // NaN
// console.log(Number("25px")); // NaN

// const result1 = isNaN("25px"); // є NaN
// const result2 = Number.isNaN("25px"); // 25 - не NaN

const result = Number.parseInt("px25");
console.log("result:", result);
const result1 = Number.parseFloat("25.9px");
console.log("result1:", result1);

// console.log("result1:", result1);
// console.log("result2:", result2);

// console.log("5" * 2); // 10
// console.log("10" - "5"); // 5
// console.log(5 + true); // 6
// console.log("5" + true); // 5true
// console.log(5 - true); // 4
// console.log("5px" - false); // NaN

const userValue = userNumber.value;
// console.log("userValue:", typeof userValue);

const yourNumber = 5;

answer.textContent = yourNumber === +userValue ? "Win" : "Lose";

// console.log(+"1.12");
