/**
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

const a = [1, 2, 3];
const b = a;

// console.log("a", a);
// console.log("b", b);

a[0] = 500;
b[2] = -100;

// console.log("a", a);
// console.log("b", b);

// console.log(a === b);

// console.log([] === []);
// console.log([1, 2, 3] === [1, 2, 3]);

let str1 = "Mango";
let str2 = str1;

console.log("str1:", str1);
console.log("str2:", str2);

str1 = "Poly";
console.log("str1:", str1);
console.log("str2:", str2);
