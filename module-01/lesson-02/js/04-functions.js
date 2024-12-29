/**
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// userNumber.oninput = onUserInput;

let counter = 0; // -> 1  -> 2 -> 3 -> 4 -> 5

function onUserInput(evt, a, b) {
  // event = undefined -> 123
  // a = undefined     -> "qwe"
  // b = undefined     -> true

  counter += 1;

  console.log(`Worked ${counter} times`);
  console.log("1 === true:", 1 === b);

  // console.log(event.target.value);

  return "Success";

  console.log("Never show");

  // return undefined;
}

const result = onUserInput(123, "qwe", true);
console.log("result:", result);
// onUserInputChange();
// onUserInputChange();
// onUserInputChange();
// onUserInputChange();

function fnA() {
  console.log("Inside fnA");
}
function fnB() {
  console.log("Inside fnB");
}
function fnC() {
  console.log("Inside fnC");
}

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");
// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");
// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");
/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */
function calcBMI(weight, height) {
  const weightToNumber = Number(weight.replace(",", "."));
  const heightToNumber = Number(height.replace(",", "."));
  const result = Math.round((weightToNumber / heightToNumber ** 2) * 10) / 10;
  return result;
}

const bmi = calcBMI("88,3", "1.75");
console.log("bmi:", bmi); // 28.8
