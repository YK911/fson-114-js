/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

function registerGuest(name, callback) {
  // name = "Mango"
  // callback = function (guestName) { console.log(`Ласкаво просимо ${guestName}`) }
  callback(name);
}

// registerGuest("Mango", function (guestName) {
//   console.log(`Ласкаво просимо ${guestName}`);
// });

// registerGuest("Mango", function (guestName) {
//   console.log(`Чи потрібно прибрати ваш номер ${guestName}?`);
// });

// registerGuest("Poly", function (guestName) {
//   console.log(`Ласково просимо постійних гостей: ${guestName}`);
// });

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  // a = 2
  // b = 3
  const result = callback(a, b);
  console.log("calc:", result);

  // 💩💩💩
  // if (operator === "**") {
  //   base ** power;
  // } else if (operator === "%") {
  //   numerator % denominator;
  // } else if (operator === "*") {
  //   leftOperand * rightOperand;
  // } else if (operator === "/") {
  //   leftOperand / rightOperand;
  // }
}

// callback-hell

// calc(2, 3, pow);

// calc(10, 8, rest);

// calc(1, 10, minus);

// functions
function pow(base, power) {
  return base ** power;
}
function rest(numerator, denominator) {
  return numerator % denominator;
}
function minus(leftOperand, rightOperand) {
  return leftOperand - rightOperand;
}

const res1 = pow(4, 2);
// console.log(res1);

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву.
 * Функція each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  array = [64, 49, 36, 25, 16];
  // callback = function (value) {console.log("res2  res2:", res2);return value * 2;};
  const newArray = [];
  for (const item of array) {
    const result = callback(item);
    newArray.push(result);
  }
  return newArray;
}

const res2 = each([64, 49, 36, 25, 16], function (value) {
  return value * 2;
});
console.log("res2:", res2);

const res3 = each([64, 49, 36, 25, 16], function (value) {
  return value - 10;
});
console.log("res3:", res3);

const res4 = each([64, 49, 36, 25, 16], function (value) {
  return Math.sqrt(value);
});
console.log("res4:", res4);

const res5 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.ceil(value);
});
console.log("res5 :", res5);

const res6 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.floor(value);
});
console.log("res6:", res6);

// Logger from Kahoot

function foo(callback) {
  callback(10);
}

function logger(a, b) {
  console.log(a + b);
}

// foo(logger);
