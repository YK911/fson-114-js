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

import { refs } from "./refs.js";
import { fetchNews } from "./news-api/news-service.js";
import { appendNewsArticles } from "./helpers/appendNewsMarkup.js";
import { PER_PAGE } from "./news-api/config.js";
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";
// посилання на іконку
import errorIcon from "/error.svg";
import successIcon from "/success.svg";

let currentPage = 1;
let searchQuery = null;
let pages = 0;

refs.form.addEventListener("submit", handleSubmit);
refs.loadMoreBtn.addEventListener("click", handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  searchQuery = form.elements.newsKeyword.value;
  refs.container.innerHTML = "";
  currentPage = 1;

  try {
    const { articles, totalResults } = await fetchNews(
      searchQuery,
      currentPage
    );

    if (currentPage === 1) {
      iziToast.success({ message: "First page 😎", iconUrl: successIcon });
    }

    pages = Math.ceil(totalResults / PER_PAGE);
    appendNewsArticles(articles, refs.container);
    refs.loadMoreBtn.classList.remove("is-hidden");
  } catch (error) {
    refs.loadMoreBtn.classList.add("is-hidden");
    iziToast.error({
      message: error.message,
      iconUrl: errorIcon,
    });
  } finally {
    form.reset();
  }
}

async function handleLoadMore() {
  currentPage += 1;

  try {
    refs.loader.classList.remove("is-hidden");

    const { articles } = await fetchNews(searchQuery, currentPage);
    appendNewsArticles(articles, refs.container);
    handleScrollView();

    if (currentPage >= Math.min(pages, 16)) {
      refs.loadMoreBtn.classList.add("is-hidden");
      iziToast.success("Last page 🥺");
    }
  } catch (error) {
    console.log(error);
    iziToast.success("");
  } finally {
    refs.loader.classList.add("is-hidden");
  }
}

function handleScrollView() {
  const lastArticle = refs.container.lastElementChild;
  const articleHeight = lastArticle.getBoundingClientRect().height;
  console.log("handleScrollView  articleHeight:", articleHeight);
  const scrollHeight = articleHeight * 2;
  console.log("handleScrollView  scrollHeight:", scrollHeight);

  window.scrollBy({
    top: scrollHeight,
    left: 0,
    behavior: "smooth",
  });
}
