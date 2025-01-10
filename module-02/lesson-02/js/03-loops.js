/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

function countAscending(start, end) {
  for (let i = start; i <= end; i++) {
    console.log("Current value: ", i);
  }
}

function countDescending(start, end) {
  for (let i = start; i >= end; i--) {
    console.log("Current value: ", i);
  }
}

// countAscending(0, 5);
// countDescending(11, 4);

let x = 1;
// console.log(x--);
// console.log(x++); // x + 1 = ?
// console.log(x);

let y = 1;
// console.log(--y);

// console.log(++y);

// console.log("Before");
// // debugger;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("After");

/**
 * -------------------------------
 */

// console.log("Before");
// for (let i = 0; i < 10; i += 3) {
//   console.log(i);
// }
// console.log("After");

/**
 * -------------------------------
 */

let a = 10;

function calculateTotal(number) {
  // debugger;
  let sum = 0; // 5, "5", true

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}

const res = calculateTotal(a);
// console.log("res:", res);
// console.log(a);
// console.log(b);

/**
 * -------------------------------
 */

// Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

function calculateEvenTotal(number) {
  let sum = 2;

  for (let i = 4; i <= number; i += 2) {
    // if (i % 2 !== 0) continue;
    sum += i;
  }

  return sum;
}

// const res1 = calculateEvenTotal(20);
// console.log("res1:", res1);
// Виклик функції calculateEvenTotal(1) повертає 0
// Виклик функції calculateEvenTot

// console.log("Before while loop");

let counter = 0;

// while (counter > 10) {
//   console.log(counter);
//   counter++;
// }

// do {
//   ++counter;
//   console.log(counter);
// } while (counter > 10);

// console.log("After while loop");
