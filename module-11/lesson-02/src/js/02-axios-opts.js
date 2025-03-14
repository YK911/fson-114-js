import axios from "axios";
import "../common.css";

/**
 * Робимо рефакторинг авторизації запитів з ключами
 *
 * Як у Axios передавати search params та headers
 *
 * Для прикладу використовуємо https://thecatapi.com/
 *
 */

axios.defaults.baseURL = "https://api.thecatapi.com/v1/images";
axios.defaults.headers.common["x-api-key"] =
  "live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF";

const searchParams = new URLSearchParams();

const params = {
  limit: 6,
  breed_ids: "beng",
};

const options = {
  params: {
    query: "obessidian",
    limit: 6,
    breed_ids: "beng",
  },
};

fetchCatsBreed(options);

const btnEl = document.querySelector(".js-btn");

btnEl.addEventListener("click", event => {
  options.params.limit = 8;
  fetchCatsBreed(options);
});

function fetchCatsBreed(options) {
  axios.get(`/search`, options).then(resp => {
    console.log(resp.data);
  });
}
