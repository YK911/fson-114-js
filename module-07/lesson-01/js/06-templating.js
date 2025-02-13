/**
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector(".title");
// console.log(titleEl.innerHTML);
// titleEl.innerHTML += " <em>Listen joke:</em> some text of joke...";

/**
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
titleEl.insertAdjacentHTML("beforebegin", "<em>Listen joke:</em>");
