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

const samplesSwiperPagination = document.querySelector('.samples-list');
const samplesSwiper = new Swiper('.samples-swiper', {
  direction: 'vertical',
  loop: false,
  effect: 'slide',
  speed: 500,
  mousewheel: {
    releaseOnEdges: true
  },

  pagination: {
    el: '.samples-list',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      [...samplesSwiperPagination.children].forEach((item, id) => {
        item.classList.remove('_next');
        if (id !== current - 1) {
          item.classList.remove('_active');
        } else {
          item.classList.add('_active');
        }
        id === current && item.classList.add('_next');
      })
    }
  }
});

const headerMenuBtn = document.querySelector('.header-menu-btn');
headerMenuBtn.onclick = () => {
  headerMenuBtn.classList.toggle('_active');
}

