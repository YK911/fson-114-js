import axios from "axios";
import "../common.css";

/**
 * Синтаксис async/await
 * try...catch
 */

init();

const fetchTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  // console.log(response);

  return response.data;

  // return axios
  //   .get("https://jsonplaceholder.typicode.com/todos")
  //   .then(response => response.data);
};

async function getCats(params) {}

const getDogs = async function (params) {};

const requestObj = {
  async getUsers() {},
};

class User {
  async deleteUserById(id) {}
}

fetchTodos()
  .then(data => console.log("Todos:", data))
  .catch(error => console.error("Помилка отримання Todos:", error));

async function init() {
  const todos = await fetchTodos();
  const markup = createTodosMArkup(todos);
}
