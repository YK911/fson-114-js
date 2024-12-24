/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

const firstName = "";
const lastName = "King";

if (firstName.length === 0 || firstName === undefined) {
}

avatar.textContent = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;

const fullName = firstName + " " + lastName;
console.log(fullName);

const quantity = 15;
const orderMsg = `You ordered ${quantity} bots`;
// orderMsg = "You ordered" + " " + quantity + " " + "bots";
console.log(orderMsg);

const message = "This string is 28 chars long";
// console.log(message);
// message[2] = "RED";

const char = message[2];

const firstPart = message.slice(0, 2);
console.log("firstPart:", firstPart);
const uppercaseLetter = message[2].toUpperCase();
console.log("uppercaseLetter:", uppercaseLetter);
const updMessage = firstPart + uppercaseLetter + message.slice(3);
console.log("updMessage:", updMessage);

// console.log("char:", char);
// console.log("message:", message);

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
