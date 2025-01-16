/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes()
 * - Цикл for...of
 * - Різниця у використанні for і for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
const isFriendsOnline = [true, true, false, true];
// console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
  // console.log(i);
  // console.log(
  //   (friends[i] += ` - ${isFriendsOnline[i] ? "Online" : "Offline"}`)
  // );
}

// console.table(friends);

for (let friend of friends) {
  // console.log(friend);
  // console.log(friends);
}

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = "8 11";

function calculateSquare(data) {
  if (typeof data !== "string") {
    console.warn("Wrong data type");
    return;
  }

  const squareParams = data.split(" ");
  const square = squareParams[0] * squareParams[1];
  console.log("square:", square);
}

// calculateSquare(values);

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(`${i + 1}: ${element}`);
}
