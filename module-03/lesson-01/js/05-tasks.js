/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

function calculateEvenSum(numbers) {
  let total = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      total += number;
    }
  }

  return total;
}

const res1 = calculateEvenSum(numbers);
// console.log("res1:", res1);
/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

function showContacts(names, phones) {
  let title = "  #  | Contact |    Phone    \n";

  let length = null;

  const namesArr = names.split(",");
  const phonesArr = phones.split(",");

  length = Math.min(namesArr.length, phonesArr.length);

  for (let i = 0; i < length; i += 1) {
    const name = namesArr[i];
    const phone = phonesArr[i];

    title += `📱 ${i + 1} | ${name}  | ${phone} \n`;
  }

  return title;
}

const res2 = showContacts(names, phones);
// console.log(res2);

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символом пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "Welcome to the future";

function showWords(string) {
  const arr = string.split(" ");

  return arr
    .slice(1, arr.length - 1)
    .join(" ")
    .trim();
}

const res3 = showWords(string);
// console.log("res3:", res3);

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;
// console.log(min); // 1

function findMinNum(numbers) {
  let minNum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber < minNum) {
      minNum = currentNumber;
    }
  }

  return minNum;
}

min = findMinNum(values);
console.log("min:", min);

// console.log(Math.min(...values)); // spread oparator
