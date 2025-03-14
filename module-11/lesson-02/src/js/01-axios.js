import axios from "axios";
import "../common.css";

/**
 * Додаємо та використовуємо бібліотеку https://axios-http.com/
 * Робимо рефакторинг
 * - Імпорт
 * - Запит
 * - Метод axios.get
 * - Обробка відповіді та помилки
 */

const list = document.querySelector(".js-todo");

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => {
//     console.log(response);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
// .then(data => {
//   console.log(data);
//   // Рендер елементів в DOM (map і insertAdjacentHTML)

//   const markup = createTodoMarkup(data);

//   list.insertAdjacentHTML("beforeend", markup);
// })
// .catch(error => {
//   console.log(error);
// });

function createTodoMarkup(todos) {
  return todos
    .map(({ completed, id, title, userId }) => {
      return `<li class="${
        completed ? "todo-item" : "todo-item not-completed"
      }" data-id="${id}" data-user-id="${userId}">
      ${title}
    </li>`;
    })
    .join("");
}
/**
 * Всередині функції запит, зовні обробка
 */
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
const fetchTodos = () => {
  return axios.get(BASE_URL).then(response => {
    return response.data;
  });
};

fetchTodos()
  .then(todos => {
    const markup = createTodoMarkup(todos);
    list.insertAdjacentHTML("beforeend", markup);
  })
  .catch(error => {
    console.log(error.status);
    console.log(error.message);
  });
