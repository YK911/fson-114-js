import { BASE_URL, API_KEY, CATS_API_KEY, CATS_BASE_URL } from "./config";
import "../common.css";

/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string (https://newsapi.org/)
 * - у хедерах (https://thecatapi.com/)
 */

function getNews() {
  const queryStirng = `${BASE_URL}?q=apple&from=2025-03-11&to=2025-03-11&sortBy=popularity&apiKey=${API_KEY}`;

  return fetch(queryStirng).then(response => {
    if (!response.ok) {
      throw new Error(response.message);
    }

    return response.json();
  });
}
getNews().then(({ articles }) => {
  console.log(articles);
});

function getBengCats(limit = 6) {
  const searchParams = new URLSearchParams({
    limit,
    breed_ids: "beng",
  });

  const url = `${CATS_BASE_URL}/images/search?${searchParams}`;

  const options = {
    headers: {
      "x-api-key": CATS_API_KEY,
    },
  };

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.message);
    }

    return response.json();
  });
}
getBengCats(12).then(cats => {
  console.log(cats);
});
