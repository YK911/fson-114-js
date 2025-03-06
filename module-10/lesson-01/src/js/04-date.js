import "../common.css";

/**
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const params = [2024, 5, 5];

const date = new Date();
console.log(date);
// console.log(date.getMinutes());
// console.log(date.getFullYear());
// console.log(date.getUTCHours());

date.setFullYear(2026);
console.log(" futureDate:", date);

console.log(new Date(0, 0));

// const date1 = Date.now();
// console.log("date1", date1);

// setTimeout(() => {
//   const date2 = Date.now();
//   const delataTime = date2 - date1;

//   console.log(" setTimeout delataTime:", delataTime);
// }, 2000);

// setInterval(() => {
//   const date2 = Date.now();

//   const delataTime = date2 - date1;

//   console.log(" setTimeout delataTime:", delataTime);
// }, 1000);
