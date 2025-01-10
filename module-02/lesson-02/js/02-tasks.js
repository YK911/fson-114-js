/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = "https://my-site.com/about";
if (link.endsWith("/")) {
  // console.log("Worked inside IF");
  // console.log(link);
} else {
  // console.log("Worked inside ELSE");
  // console.log(link + "/");
}
// console.log(link);

/**
 * Форматування посилання (includes та логічне «І»)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної url символом /. Якщо ні, додай до кінця
 * значення url цей символ, але тільки в тому випадку,
 * якщо в url є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = "https://my-site.com/about/";
// console.log(url);

if (url.includes("my-site") && !url.endsWith("/")) {
  // console.log(url + "/");
} else {
  // console.log(url);
}

/**
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

function checkSpamWord(text, spamWord1, spamWord2) {
  const hasSpamWord =
    text.toLowerCase().includes(spamWord1.toLowerCase()) ||
    text.toLowerCase().includes(spamWord2.toLowerCase());

  if (hasSpamWord) {
    console.log("Текст містить заборонені слова ❌");
  } else {
    console.log("Текст не містить заборонених слів ✅");
  }
}

checkSpamWord(string1, blacklistedWord1, blacklistedWord2);
checkSpamWord(string2, blacklistedWord1, blacklistedWord2);
checkSpamWord(string3, blacklistedWord1, blacklistedWord2);
