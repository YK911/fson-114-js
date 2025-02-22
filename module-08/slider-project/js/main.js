const sliderContainer = document.querySelector(".js-hero-slider");
const slidesContainer = document.querySelector(
  ".js-hero-slider .swiper-wrapper"
);

const heroSliderOptions = {
  pagination: {
    el: ".swiper-pagination",
  },
};
const swiper = new Swiper(sliderContainer, heroSliderOptions);

renderMarkup();

// Functions
async function getEvents() {
  const url = "https://tasty-treats-backend.p.goit.global/api/events";

  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

function createSlidesMarkup(slidesData) {
  return slidesData
    .map(
      ({
        cook: { name, imgWebpUrl },
        topic: {
          name: topicName,
          area,
          imgWebpUrl: topicImgLg,
          previewWebpUrl,
        },
        _id,
      }) => {
        return `<li class="swiper-slide" data-id="${_id}">
                  <div class="left">
                    <img src="${imgWebpUrl}" alt="${name}" />
                  </div>
                  <div class="middle">
                    <img src="${previewWebpUrl}" alt="${topicName}" />
                    <h3>${topicName}</h3>
                    <p>${area}</p>
                  </div>
                  <div class="right">
                    <img src="${topicImgLg}" alt="${name}" />
                  </div>
                </li>`;
      }
    )
    .join("");
}

async function renderMarkup() {
  const eventsData = await getEvents();

  const slidesMarkup = createSlidesMarkup(eventsData);

  slidesContainer.insertAdjacentHTML("beforeend", slidesMarkup);
  swiper.update();
}
