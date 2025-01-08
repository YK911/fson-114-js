/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

// console.log("Before");
// const number = prompt("Введіть число", "");

// let msg;

// if (Number(number)) {
//   if (Number(number) >= 12) {
//     msg = "Ви ввели число яке більше або дорівнює 12 ";
//   } else {
//     msg = "Ви ввели число яке менше за 12";
//   }
// } else {
//   msg = "Ви ввели не число";
// }

// console.log("msg:", msg);

// console.log("After");

/**
 * -----------------------------
 */
// const points = 1600;

// if (points <= 500) {
//   console.log("Level 1");
// } else if (points <= 1500) {
//   console.log("Level 2");
// } else if (points <= 3500) {
//   console.log("Level 3");
// } else {
//   console.log("Level 4");
// }

/**
 * -----------------------------
 */
const balance = Math.round(Math.random() * 100) / 100;
console.log("balance:", balance);

let message = balance >= 0.5 ? "Positive" : "Negative";

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }

// console.log(message);
