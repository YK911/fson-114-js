/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class Car {
  static description = "I'm only for class Car";
  static #counter = 0;

  #brand;
  #model;

  constructor(brand, model, price) {
    this.#brand = brand;
    this.#model = model;
    this.price = price;

    Car.setCountOfInstances();
  }

  static showCounter() {
    console.log(this.#counter);
  }

  static setCountOfInstances() {
    // console.log(this);

    this.#counter += 1;
  }

  get brand() {
    return this.#brand;
  }

  set brand(updatedBrandName) {
    if (updatedBrandName.toLowerCase() === this.#brand.toLowerCase()) {
      this.#brand = updatedBrandName;
    }
  }
  witoutGetBrand() {
    return this.#brand;
  }

  print() {
    return `You create car: ${this.#brand} ${this.#model} with price ${
      this.price
    } $`;
  }

  makeDiscount(discount) {
    this.price *= 1 - Number.parseInt(discount) / 100;
  }
}

const instanceAudi = new Car("Audi", "A5", 30_000);
// {
//   brand: "Audi";
//   model: "A5";
//   price: 30_000;
//    print() {
//           return `You create car: ${this.brand} ${this.model} with price ${this.price} $`;
//      }
// }
instanceAudi.makeDiscount("10%");
console.log(Car.description);

console.log(instanceAudi.brand);
console.log(instanceAudi.witoutGetBrand());
instanceAudi.brand = "ZAZ";
console.log(instanceAudi.brand);
// instanceAudi.#brand = "Zaz";
// instanceAudi.#model = "Slavuta";
const res = instanceAudi.print();
console.log("res:", res);

const instanceNissan = new Car("Nissan", "GT-R", 40_000);
const instanceCadillac = new Car("Cadillac", "ATS", 10_000);
// {
//   brand: "Cadillac";
//   model: "ATS";
//   price: 10_000;
// }
// console.log(Car.#counter);
// Car.#counter = 100;
Car.showCounter();

class User {
  // Необов'язкове оголошення публічних властивостей
  name;
  age;
  isMarried;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.isMarried = params.isMarried;
    this.#email = params.email;
  }
}

class User1 {
  static roles = {
    admin: "admin",
    editor: "editor",
    basic: "basic",
  };

  #email;
  #role;

  constructor(params) {
    this.#email = params.email;
    this.#role = params.role || User1.roles.basic;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User1({
  email: "mango@mail.com",
  role: "superuser",
});
console.log(mango);
