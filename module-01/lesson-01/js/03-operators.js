/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 10;
const b = 5;

// const result = (a + 2) / b;
// const result = b % a;
// const result = b ** 2;
// console.log("result:", result);

console.log(Math.pow(5, 2));

incrementBtn.addEventListener("click", () => {
  let counterValue = counter.textContent;
  counterValue++;
  counter.textContent = counterValue;
});

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

const sumFruits = apples + grapes;
console.log("sumFruits:", sumFruits);

const extractApplesGrapes = apples - grapes;
console.log("extractApplesGrapes:", extractApplesGrapes);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
// students = students + 50; // 100 + 50
students %= 50; // 100 + 50
console.log(students);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

const result = 108 + 223 - 2 * 5 ** 2;
console.log(result);
