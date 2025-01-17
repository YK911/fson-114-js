/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems() {
  const args = Array.from(arguments[0]);
  // console.log(args);

  for (let i = 0; i < args.length; i += 1) {
    const item = args[i];
    console.log(`${i + 1} - ${item}`);
  }
}

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {
  const namesArr = names.split(",");
  const phonesArr = phones.split(",");

  for (let i = 0; i < namesArr.length; i++) {
    const name = namesArr[i];
    const phone = phonesArr[i];

    console.log(`Contact: ${name}\nPhone number: ${phone}`);
  }
}

// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// console.log("hours", );
// console.log("minutes", 70 % 60);

function formatTime(minutes) {
  const hours = Math.trunc(minutes / 60); // скільки годин

  minutes %= 60; // скільки хвилин залишається за мінусом годин
  // 420 - 60 * 7 = 30

  return `${normalizeDigits(hours)}:${normalizeDigits(minutes)}`;
}

function normalizeDigits(number) {
  return String(number).padStart(2, "0");
}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(360)); // "06:00"
