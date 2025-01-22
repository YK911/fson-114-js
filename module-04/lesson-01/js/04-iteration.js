/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;
// let counter = 0;

// for (const key in feedback) {
//   // 1. step ==> const key = 'good'
//   // 2. step ==> const key = 'neutral'
//   // 3. step ==> const key = 'bad'
//   totalFeedback += feedback[key];
//   counter++;
// }

// garbage collector

// console.log("totalFeedback: ", totalFeedback);
// console.log("counter:", counter);
// console.log("Mean feedback", totalFeedback / counter);

/**
 * ---------------------------------
 */
const keys = Object.keys(feedback);
console.log(keys);

// console.log("totalFeedback: ", totalFeedback);

const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  totalFeedback += value;
}

console.log("totalFeedback: ", totalFeedback);

const entries = Object.entries(feedback);
console.log("entries:", entries);
