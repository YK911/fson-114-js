//* Form data constructor
//* (https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)

const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

populateTextarea();

form.addEventListener("submit", onFormSubmit);
textarea.addEventListener("input", onTextareaInput);

/**
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const { name, message } = form.elements;

  // const data = new FormData(form);

  // const formData = {};

  // for (const [key, value] of data) {
  //   formData[key] = value;
  // }

  // console.log(formData);

  const formData = {
    userName: name.value,
    userMessage: message.value,
  };

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

/**
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */
function onTextareaInput(event) {
  const msg = event.target.value;
  localStorage.setItem(STORAGE_KEY, msg);
}

/**
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
function populateTextarea() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);

  if (!savedMsg) {
    return;
  }

  textarea.value = savedMsg;

  // textarea.value = localStorage.getItem(STORAGE_KEY) ?? "";
}
