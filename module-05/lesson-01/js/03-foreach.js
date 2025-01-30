/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25];
let total = 0;

// for (const number of numbers) {
//   total += number;
// }

numbers.forEach(number => (total += number));

// console.log(total);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

function logItems(items) {
  items.forEach((item, index) => console.log(`${index + 1} - ${item}`));
}

// logItems(["Mango", "Poly", "Ajax"]);
// console.log("\n");

// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  nameList.forEach((name, index, array) => {
    console.log(`${name}: ${phoneList[index]}`);
  });
}

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочної функції.
 */
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }
function calculateAverage(...args) {
  let total = 0;

  args.forEach((element, index, array) => {
    array[index] = element ** 2;
  });

  return total / args.length;
}

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
