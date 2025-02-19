/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => (acc += number), 0);
// console.log(total);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((acc, salary) => {
  return (acc += salary);
}, 0);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((acc, player) => {
  return (acc += player.timePlayed);
}, 0);
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (acc, { price, quantity }) => (acc += price * quantity),
  0
);
// console.log(totalAmount);

const url =
  "https://pixabay.com/api/?key=15249615-5ccf49bef51d4f01888f64cb2&q=yellow+flowers&image_type=photo&per_page=9";

// fetch(url)
//   .then(resp => {
//     return resp.json();
//   })
//   .then(data => {
//     const images = data.hits;
//     const markup = images.reduce((str, image) => {
//       return (str += `<li class="item">
//                 <img
//                   class="gallery-img"
//                   src="${image.previewURL}"
//                   alt="${image.tags}"
//                   width="${image.previewWidth}"
//                   height="${image.previewHeight}"
//                 />
//               </li>
//               `);
//     }, "");

//     document.querySelector(".gallery").insertAdjacentHTML("beforeend", markup);
//   });
