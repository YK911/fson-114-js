/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = "50px";
console.log("elementWidth: ", Number.parseInt(elementWidth));
console.log("elementWidth: ", Number.parseInt("50рх20рх"));
console.log(Number(elementWidth));

let elementHeight = "200.74px";
console.log("elementHeight: ", Number.parseFloat(elementHeight));
console.log("elementHeight: ", Number.parseFloat("200.74.87deg"));
console.log("elementHeight: ", Number.parseFloat("87deg"));

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.9;
// console.log("floor", Math.floor(value));
// console.log("ceil", Math.ceil(value));
// console.log("round", Math.round(value));
