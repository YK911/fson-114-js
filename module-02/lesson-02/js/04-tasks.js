/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

const a = 100;
const b = 20;

function showASCNumbers(a = 100, b = 20) {
  // console.log(a, b);
  let temp = a;
  if (a > b) {
    a = b;
    b = temp;
  }
  // console.log(a, b);

  for (let i = a; i < b; i++) {
    if (i % 5 !== 0) continue;
    // console.log(i);
  }
}
showASCNumbers(20, 100);

function showASCENDNumbers(a = 100, b = 20) {
  let min;
  let max;

  let x = Math.min(a, b),
    y = Math.max(a, b);

  if (a > b) {
    min = b;
    max = min + Math.abs(a - b);
  } else {
    min = a;
    max = b;
  }

  console.log(min, max);

  for (let i = min; i < max; i++) {
    if (i % 5 !== 0) continue;
    console.log(i);
  }
}

showASCENDNumbers(100, 20);
showASCENDNumbers(0, 5);

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 а max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 0;
const max = 5;
let total = 0;
