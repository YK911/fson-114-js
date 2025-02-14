/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
  },
  {
    id: 2,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 3,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 4,
    car: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 5,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 6,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

const elements = {
  form: document.querySelector(".js-form"),
  container: document.querySelector(".js-list"),
};
// Step 1: render collection to HTML
renderMarkup(elements.container, createCarCards(cars));

// Step 2: add listener to form
elements.form.addEventListener("submit", onSearch);
function createCarCards(cars) {
  return cars
    .map(car => {
      return `<li class="car-item" id="${car.id}">
        <img
          class="car-item-ill"
          src="${car.img}"
          alt="${car.car} ${car.type}"
        />
        <h3 class="car-item-info">${car.car} ${car.type}</h3>
        <p class="car-item-price">${car.price} $</p>
      </li>`;
    })
    .join("");
}

function renderMarkup(el, markup) {
  el.innerHTML = markup;
}

function onSearch(event) {
  event.preventDefault();
  const form = event.target;

  const selectedOptionIdx = form.elements.options.selectedIndex;
  const selectedOption = form.elements.options[selectedOptionIdx].value;
  const searchQuery = form.elements.query.value;

  // console.log(selectedOption);
  // console.log(searchQuery);

  const searchResult = cars.filter(car => {
    return car[selectedOption]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  if (searchResult.length === 0) {
    elements.container.innerHTML = "<li>No results</li>";
    return;
  }

  renderMarkup(elements.container, createCarCards(searchResult));

  form.reset(); // option
}

// class Car {
//   constructor(model, type) {
//     this.model = model;
//     this.type = type;
//   }

//   get model() {
//     return this.model;
//   }
//   set model(newValue) {
//     this.model = newValue;
//   }

//   getModel() {
//     return this.model;
//   }
//   setModel(newValue) {
//     this.model = newValue;
//   }
// }

// const audi = new Car("Audi", "A6");

// console.log(audi.model);
// audi.model = "BMW";

// audi.getModel();
// audi.setModel("Honda");
