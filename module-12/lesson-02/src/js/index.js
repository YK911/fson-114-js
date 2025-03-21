/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при сабміті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо спіннер поки йде запит
 */

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { refs } from "./helpers/refs";
import { appendArticles } from "./helpers/append-articles";
import { fetchNews } from "./news-api/news-service";
import { PAGE_SIZE } from "./news-api/config";

const { form, loadMoreBtn, articleContainer, spinner } = refs;
const url =
  "https://newsapi.org/v2/everything?apiKey=f937548ce92c4cccab3e47b760e40b34&q=cats&language=en&sortBy=popularity&pageSize=8&page=3";

let query = null;
let currentPage = 1;
let totalPages = 0;

form.addEventListener("submit", onSearchSubmit);
loadMoreBtn.addEventListener("click", onLoadMoreClick);
/**
 * Functions
 */
async function onSearchSubmit(event) {
  event.preventDefault();

  currentPage = 1;
  totalPages = 0;
  articleContainer.innerHTML = "";
  loadMoreBtn.classList.add("visually-hidden");

  const form = event.currentTarget;
  const { searchQuery } = form.elements;
  query = searchQuery.value.trim();

  if (query.length === 0) {
    iziToast.warning({
      message: "Please enter search query",
      position: "topRight",
    });
    return;
  }

  try {
    const { articles, totalResults } = await fetchNews(query);
    appendArticles(articles);

    totalPages = Math.ceil(totalResults / PAGE_SIZE);

    if (totalPages > currentPage) {
      loadMoreBtn.classList.remove("visually-hidden");
    }
  } catch (error) {
    console.log(error);
  } finally {
    form.reset();
  }
}

async function onLoadMoreClick() {
  currentPage += 1;
  try {
    spinner.classList.remove("visually-hidden");
    const { articles } = await fetchNews(query, currentPage);
    appendArticles(articles);

    if (currentPage >= totalPages) {
      loadMoreBtn.classList.add("visually-hidden");
      iziToast.success({ message: "Last page 😎" });
    }
  } catch (error) {
    console.log(error);
  } finally {
    spinner.classList.add("visually-hidden");
  }
}
