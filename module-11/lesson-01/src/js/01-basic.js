import "../common.css";

/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const list = document.querySelector(".todo-list");

// const options = {
//   method: "POST",
//   body: ''
// };

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Ops... something went wrong");
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(" data:", data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/**
 * Всередині функції запит, зовні обробка
 */
const fetchTodos = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

fetchTodos()
  .then(data => {
    const markup = createTodoMarkup(data);

    list.insertAdjacentHTML("beforeend", markup);
  })
  .catch(error => {
    console.log(error.message);

    document.body.insertAdjacentHTML(
      "beforeend",
      `<strong>Something went wrong</strong>\n<script>${window.alert(
        "Aaaaa"
      )}</script>`
    );
  });

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
