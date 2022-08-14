document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector(".nav").offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  classNames: {
    selectedState: "is-selected",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate("#form");
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);
  validation
    .addField("#name", [
      {
        rule: "customRegexp",
        value: "[а-яА-ЯA-z]",
        errorMessage: "Недопустимый формат",
      },

      {
        rule: "minLength",
        value: 2,
        errorMessage: "Вы ввели меньше, чем положено",
      },

      {
        rule: "required",
        errorMessage: "Введите ваше имя",
      },

      {
        rule: "maxLength",
        value: 10,
        errorMessage: "Вы ввели больше, чем положено",
      },
    ])
    .addField("#phone", [
      {
        rule: "function",
        validator: function (name, value) {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },

        errorMessage: "Введите ваш телефон",
      },
    ]);
});

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [55.76019510027298, 37.615184137259064],

      zoom: 14,
      controls: [],
    },
    {
      suppressMapOpenBlock: true,
    }
  );
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [48.872185073737896, 2.354223999999991], // координаты точки
      controls: [], 
    },
  });
  var myPlacemark = new ymaps.Placemark(
    [55.760219298439885, 37.614669153128204],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "/img/maps__location.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");
}
