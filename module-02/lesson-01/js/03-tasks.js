/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 35;
let timestring;

if (minutes > 0) {
  timestring = `${hours} г. ${minutes} хв.`;
} else {
  timestring = `${hours} г.`;
}

// timestring = minutes > 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

// console.log(timestring);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = -1;

if (daysUntilDeadline < 0) {
  console.log("Deadline is over");
} else if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("Overmorrow");
} else {
  console.log("Date in the future");
}

// function dish(dishName) {
// dishName = "Scramble eggs"

//   return function (chief) {
//     return `${chief} now cooking ${dishName}`;
//   };
// }

// const scrambleEggs = dish("Scramble eggs");

// const finishedDish = scrambleEggs("Mango");
// const finishedDish2 = scrambleEggs("Poly");
// const finishedDish3 = scrambleEggs("Ajax");

// console.log("finishedDish:", finishedDish);
// console.log("finishedDish2:", finishedDish2);
// console.log("finishedDish3:", finishedDish3);
