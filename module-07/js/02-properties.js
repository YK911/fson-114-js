/**
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector(".hero__image");
// console.log(imageEl.width);
// console.log(imageEl.alt);
// console.log(imageEl.src);

// setTimeout(() => {
//   imageEl.width = 640;
// }, 3000);

// setTimeout(() => {
//   imageEl.src =
//     "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";
// }, 6000);

const heroTitleEl = document.querySelector(".hero__title");

// console.log("textContent:", heroTitleEl.textContent);
// setTimeout(() => {
//   heroTitleEl.textContent =
//     "Awesome cat <code>Some example of code: textContnet prop</code>";
// }, 3000);
// console.log("innerHTML:", heroTitleEl.innerHTML);

// setTimeout(() => {
//   // heroTitleEl.innerHTML =
//   //   "Awesome cat <code>Some example of code: textContnet prop</code>";
//   // heroTitleEl.innerHTML = "";
// }, 3000);

// const sectionEl = document.querySelector(".hero");
// setTimeout(() => {
//   sectionEl.innerHTML = "";
// }, 3000);

/**
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

const inputEl = document.querySelector(".js-input");

const typeAttr = inputEl.getAttribute("type");
console.log("typeAttr:", typeAttr);

setTimeout(() => {
  // inputEl.setAttribute("type", "checkbox");
  inputEl.removeAttribute("disabled");
}, 3000);

const refs = {
  input: document.querySelector("input[type=checkbox]"),
  btn: document.querySelector(".wrapper button"),
};

refs.input.addEventListener("click", evt => {
  const inputEl = evt.currentTarget;

  if (!inputEl.hasAttribute("checked")) {
    inputEl.setAttribute("checked", true);
  }

  if (inputEl.checked) {
    refs.btn.removeAttribute("disabled");
  } else {
    refs.btn.setAttribute("disabled", true);
  }
});

console.log("refs:", refs);

/**
 * Data-атрибути
 */
const actions = document.querySelectorAll(".actions button");

actions.forEach(btn => {
  btn.addEventListener("click", evt => {
    const currentBtn = evt.target;
    const action = currentBtn.dataset.action;

    switch (action) {
      case "add":
        addFn();
        break;
      case "remove":
        removeFn();
        break;
      case "edit":
        editFn();
        break;

      default:
        console.log("No function for this action");
        break;
    }
  });
});

function addFn() {
  console.log("Something added to page");
}
function removeFn() {
  console.log("Something remove from page");
}
function editFn() {
  console.log("Something edited on page");
}
