/**
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */
document.addEventListener("keydown", event => {
  console.log(event.shiftKey);
  console.log(event.code);
  console.log(event);

  if (event.shiftKey === true && event.code === "KeyC") {
    console.log("Combination works");
    event.preventDefault();
  }
});
/**
 * Обробка комбінацій клавіш
 */
