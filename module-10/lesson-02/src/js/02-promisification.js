import "../common.css";

/**
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;
//   console.log("makeOrder passed:", passed);

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//       return;
//     }

//     onError("❌ Упс, у нас закінчилися продукти");
//   }, 1000);
// };

const makeOrder = dish => {
  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    console.log("makeOrder passed:", passed);

    if (passed) {
      resolve(`✅ Ваше замовлення: ${dish}`);
    }

    reject("❌ Упс, у нас закінчилися продукти");
  });
};

// makeOrder("пиріжечок")
//   .then(result => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   })
//   .catch(error => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   });
// .finally(() => {
//   console.log("Hello from finnaly()");
// });

// makeOrder(
//   "пиріжок",
// result => {
//   console.log("onMakeOrderSuccess");
//   console.log(result);
// },
// error => {
//   console.log("onMakeOrderError");
//   console.log(error);
// }
// );

/**
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// const prepareDish = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     onSuccess(`✅ Ваше замовлення: ${dish}`);
//   }

//   onError("❌ Упс, у нас закінчилися продукти");
// };

const prepareDish = dish => {
  const passed = Math.random() > 0.5;

  return passed
    ? Promise.resolve(`✅ Ваше замовлення: ${dish}`)
    : Promise.reject("❌ Упс, у нас закінчилися продукти");
};

prepareDish("пиріжок")
  .then(result => {
    console.log("onPrepareDishSuccess");
    console.log(result);
  })
  .catch(error => {
    console.log("onPrepareDishError");
    console.log(error);
  });

// makeOrder(
//   "пиріжок",
// result => {
//   console.log("onMakeOrderSuccess");
//   console.log(result);
// },
// error => {
//   console.log("onMakeOrderError");
//   console.log(error);
// }
// );
