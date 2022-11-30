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

const relax = new Rellax('.rellax', {
  center: true
});

const headerMenuBtn = document.querySelector('.header-menu-btn');
headerMenuBtn.onclick = () => {
  headerMenuBtn.classList.toggle('_active');
}

