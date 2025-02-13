/**
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: "червоний", color: "#F44336" },
  { label: "зелений", color: "#4CAF50" },
  { label: "синій", color: "#2196F3" },
  { label: "сірий", color: "#607D8B" },
  { label: "рожевий", color: "#E91E63" },
  { label: "індіго", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

/**
 * Пишемо функцію для створення розмітки колорпікера
 */
const colorPickerBtns = options.map(option => {
  const btnEl = document.createElement("btn");
  btnEl.type = "button";
  btnEl.textContent = option.label[0].toUpperCase() + option.label.slice(1);
  btnEl.style.backgroundColor = option.color;
  btnEl.classList.add("color-picker__option");

  return btnEl;
});

//! colorPickerBtns = [ {} = btn, {} = btn, {} = btn, {} = btn]

colorPickerContainerEl.append(...colorPickerBtns);
