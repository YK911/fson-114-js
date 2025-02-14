/**
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector(".js-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // console.log(event.target.elements);
  const pass = event.target.elements.password.value;
  const email = event.target.elements.email.value;
  const msg = event.target.elements.comment.value;

  const formData = {
    email: email,
    pass: pass,
    msg: msg,
  };

  console.log(formData);

  // const data = new FormData(event.target);
  // for (const item of data) {
  //   console.log(item, data[item]);
  // }
}
