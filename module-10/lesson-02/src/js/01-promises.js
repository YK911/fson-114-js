import "../common.css";

/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

const executor = (resolve, reject) => {
  // const canFullfill = Math.random() < 0.5;
  const canFullfill = false;

  console.log("canFullfill:", canFullfill);

  setTimeout(() => {
    if (canFullfill) {
      resolve(
        "Проміс виконався успішно, із результатом (виконаний, fulfilled)"
      );
    }

    reject("Проміс виконався з помилкою (відхилений, rejected)");
  }, 1000);
};

// const promise = new Promise(executor);

// promise
//   .then(value => {
//     console.log(value);
//     return "First then() result";
//   })
//   .then(data => {
//     const str = "Second then() result";

//     const res = data + " " + str;
//     console.log(res);
//     // return undefined
//   })
//   .then(a => {
//     console.log(a);
//   });
// .catch(error => {
//   console.log(error);
// });

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

// const promise2 = new Promise(executor);

// promise2
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => console.log(error));

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */
