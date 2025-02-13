/**
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = "/portfolio";

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);

setTimeout(() => {
  linkEl.classList.add("site-nav__link--current");
}, 2000);
const isCurrent = linkEl.classList.contains("current");
console.log("isCurrent:", isCurrent);

setTimeout(() => {
  linkEl.classList.remove("current");

  const isCurrent = linkEl.classList.contains("current");
  console.log("isCurrent:", isCurrent);
}, 3000);

linkEl.addEventListener("click", event => {
  event.preventDefault();
  const link = event.target;
  // link.classList.toggle("active");
  link.classList.replace("link", "acive-link");
});
