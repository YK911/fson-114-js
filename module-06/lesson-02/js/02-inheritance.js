/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Hero {
  constructor({ name = "hero", exp = 0 }) {
    this.name = name;
    this.exp = exp;
  }

  gainExp(amount) {
    this.exp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...params }) {
    super(params);
    this.weapon = weapon;
  }
  attack() {
    console.log(`${this.name} attacks by ${this.weapon}`);
  }
  gainExp(amount) {
    this.exp += amount * 1.2;
  }
}

class Mage extends Hero {
  constructor({ spells, ...params }) {
    super(params);
    this.spells = spells;
  }
  cast() {
    console.log(`${this.name} is casting a spell ${this.spells}`);
  }
}

const warriorOptions = { name: "Conan", exp: 100, weapon: "Axe" };
const conan = new Warrior(warriorOptions);
conan.attack();
conan.gainExp(20);
console.log("conan:", conan);

const dambldor = new Mage({ name: "Dambldor", exp: 80, spells: "fireball" });
dambldor.cast();
dambldor.gainExp(30);
console.log("dambldor:", dambldor);
