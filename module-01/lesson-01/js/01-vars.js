/**
 * Змінні та типи даних
 *
 * - Оголошення змінних з let і const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булі, null, undefined
 * - Оператор typeof
 */
"use strict";

// var notReccomended = "asd";

const floatNumber = 41;
console.log("floatNumber:", typeof floatNumber);

let userPass = `<123*qwe>`;
console.log("userPass:", typeof userPass);

userPass = "asd)(*123";
// console.log("userPass:", userPass);

let UIElement = null;
console.log("UIElement:", typeof UIElement);
// // Press btn -> open list
// UIElement = "<ul><li>item</li></ul>";

// if (!UIElement) {
//   console.log("Element does't exsist");
// } else {
//   console.log("Do some magic ✨");
// }

console.log(typeof true);

let dropdownMenu;
console.log("dropdownMenu:", typeof dropdownMenu);
// console.log("dropdownMenu:", dropdownMenu);

// const titleEl = document.querySelector("h1");

// function transformTitleEl(title) {
//   return title.textContent.toUpperCase();
// }

// function changeTitleCase(title) {
//   title.innerHTML = transformTitleEl(title);
//   // return undefined
// }

// setTimeout(changeTitleCase(titleEl), 2000);
