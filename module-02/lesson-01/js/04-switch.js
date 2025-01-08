/**
 * Оператор switch
 */

userName.addEventListener("change", function (event) {
  const input = event.target;

  const username = input.value;

  switch (username) {
    case "Poly":
    case "Mango":
      result.textContent = "ADMIN";
      break;
    case "Avocode":
      result.textContent = "MANAGER";
      break;
    default:
      result.textContent = "Unregister user";
  }
});

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 4;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Today");
//     break;
//   case 1:
//     console.log("Tomorrow");
//     break;
//   case 2:
//     console.log("Overmorrow");
//     break;
//   default:
//     console.log("Date in the future");
// }

// if (daysUntilDeadline === 0) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Overmorrow");
// } else {
//   console.log("Date in the future");
// }

/**
 * Напиши скрипт вибору опції доставки товара.
 * Опція зберігається в змінній option: 1 - самовивіз, 2 - курʼєр, 3 - пошта
 *
 * В змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Курʼєр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам зателефонує менеджер'
 */
order.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const userChoise = +form.elements.option.value;
  let message = "";

  switch (userChoise) {
    case 1:
      message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
      break;
    case 2:
      message = "Курʼєр доставить замовлення завтра з 9:00 до 18:00";
      break;
    case 3:
      message = "Посилка буде відправлена сьогодні";
      break;
    default:
      message = "Вам зателефонує менеджер";
  }

  console.log(message);
  answer.textContent = message;
});

const option = 123;
let message = "";

switch (option) {
  case 1:
    message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
    break;
  case 2:
    message = "Курʼєр доставить замовлення завтра з 9:00 до 18:00";
    break;
  case 3:
    message = "Посилка буде відправлена сьогодні";
    break;
  default:
    message = "Вам зателефонує менеджер";
}

// console.log(message);
