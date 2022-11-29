// class dropDown {
//   constructor(listElement, buttonElement) {
//     this.list = typeof listElement === "string" ? document.querySelector(listElement) : listElement
//     this.button = typeof buttonElement === "string" ? document.querySelector(buttonElement) : buttonElement
//     this._init()
//   }

//   _init() {
//     this.button.addEventListener('click', this.toggleMenu.bind(this))
//   }

//   toggleMenu() {
//     this.list.classList.toggle('_open')
//     this.button.classList.toggle('_open')
//   }
// }

const mainSwiper = new Swiper('.main-swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  speed: 500,

  pagination: {
    el: '.main-swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.main-swiper-btn',
  },

  scrollbar: false,
});

