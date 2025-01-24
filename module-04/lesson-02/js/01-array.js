/**
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];

// console.table(friends);

/**
 * Пошук друга за іменем
 */
function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name === friendName) {
      console.log("Success! Friend was found");
      return friend;
    }
  }

  console.log("Error!");
}

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

/**
 * Отримуємо імена всіх друзів
 */
function getAllNames(allFriends) {
  const names = [];

  for (let i = 0; i < allFriends.length; i++) {
    const friend = allFriends[i];
    names.push(friend.name);
    // console.log("getAllNames:", friend.name);
  }

  return names;
}

// console.log(getAllNames(friends));

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend.name);
    }
  }

  return onlineFriends;
}

// console.log(getOnlineFriends(friends));

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  // stones = []
  // stoneName = "Діамант"
  // arguments = pseudo []
  // this

  for (const stone of stones) {
    if (stone.name === stoneName) {
      const total = stone.price * stone.quantity;
      return `Вартість каміння: ${stone.name} складає ${total} у.о`;
    }
  }

  return `В крамниці відсутнє каміння - ${stoneName}`;

  // return undefined
}

const result1 = calcTotalPrice(stones, "Діамант");
// console.log("result1:", result1);
const result2 = calcTotalPrice(stones, "Галька");
// console.log("result2:", result2);
