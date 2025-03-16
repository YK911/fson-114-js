import axios from "axios";
import "../common.css";

/**
 * Синтаксис async/await
 * try...catch
 */

const fetchTodos = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.data);
};

fetchTodos()
  .then(data => console.log("Todos:", data))
  .catch(error => console.error("Помилка отримання Todos:", error));
