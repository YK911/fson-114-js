/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = !user.premium; // 1 step: true 2 step: inversion to false

// console.log(user);

const keys = Object.keys(user); // []
// console.log("keys:", keys);

for (const key of keys) {
  const message = `${key}: ${user[key]}`;
  // console.log(message);
}
/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const salariesValue = Object.values(salaries); // []

let sum = 0;

if (salariesValue.length !== 0) {
  console.log("✨ worked");

  for (const value of salariesValue) {
    sum += value;
  }
}

// console.log(sum);
