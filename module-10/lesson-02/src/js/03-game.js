import "../common.css";

/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скрипт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

// const refs = {
//   startBtn: document.querySelector(".start-btn"),
//   container: document.querySelector(".container"),
//   result: document.querySelector(".result"),
// };

const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

// const arrWin = { "🤑": 0.4, "👿": 0.5, "🐿️": 0.6 };
// const arrLose = { "💩": 0.1, "🚀": 0.2, "🚀": 0.9 };

startBtn.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  const promises = [...container.children].map(() => {
    return new Promise((resolve, reject) => {
      const random = Math.random();

      if (random < 0.7 && random > 0.3) {
        resolve("🤑");
      }

      reject("👿");
    });
  });

  Promise.allSettled(promises).then(items => {
    items.forEach((item, i, items) => {
      container.children[i].textContent = "";

      setTimeout(() => {
        container.children[i].textContent = item.value ?? item.reason;

        if (i === items.length - 1) {
          result.innerHTML = isWinner ? "Winner" : "Loser";
        }
      }, 1000 * (i + 1));
    });

    const isWinner =
      items.every(item => item.status === "fulfilled") ||
      items.every(item => item.status === "rejected");
  });
}
