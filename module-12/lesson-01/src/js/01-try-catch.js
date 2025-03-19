// import "../common.css";

/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 *  - ❌ помилки парсингу (parsing errors)
 *  - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 * - Об'єкт помилки
 *  - name
 *  - message
 *  - stack
 * - Блок catch без об'єкта помилки
 */

console.log("Before try...catch");

try {
  // const response = await fetch("https://jsonplaceholde.typicode.com/users");
  // console.log(" response:", response);

  // fetch("https://jsonplaceholde.typicode.com/users").then(resp =>
  //   console.log(resp)
  // )

  const string = "Str";
  JSON.parse(string);

  console.log("Result");
} catch {
  console.log("Somethong went wrong");
}

console.log("After try...catch");
