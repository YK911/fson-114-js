/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3, 11];

// const sorted = numbers.toSorted();
// const sorted = numbers.sort();
// console.log("sorted ", sorted);

const letters = ["b", "B", "a", "A"];
// console.log("letters", letters.toSorted());

// console.log("a".localeCompare("b"));
// console.log("b".localeCompare("a"));
// console.log("a".localeCompare("a"));

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return curEl - nextEl;
//   })
// );

const descSortedNumbers = numbers.toSorted((a, b) => b - a);
const ascSortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];
console.table(players);

// За ігровим часом
const sortedByBestPlayers = players.toSorted((currentPlayer, nextPlayer) => {
  return nextPlayer.timePlayed - currentPlayer.timePlayed;
});
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted((currentPlayer, nextPlayer) => {
  return currentPlayer.timePlayed - nextPlayer.timePlayed;
});
// console.table(sortedByWorstPlayers);

// По першій літері имені
const byName = players.toSorted((currentPlayer, nextPlayer) => {
  // const result = currentPlayer.name[0] > nextPlayer.name[0];
  // if (result) {
  //   return 1;
  // }
  // if (!result) {
  //   return -1;
  // }

  return currentPlayer.name.localeCompare(nextPlayer.name);
});

// console.table(byName);
