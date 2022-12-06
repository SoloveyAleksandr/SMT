document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector('.page');

  const relax = new Rellax('.rellax', {
    center: false,
    breakpoints: [500],
  });

  const mainSwiper = new Swiper('.main-swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    speed: 500,

    pagination: {
      el: '.main-swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        const currEl = document.querySelector('.main-swiper-pagination__current');
        const totalEl = document.querySelector('.main-swiper-pagination__total');

        currEl.innerHTML = current < 10 ? `0${current}` : current;
        totalEl.innerHTML = total < 10 ? `0${total}` : total;
      }
    },

    navigation: {
      nextEl: '.main-swiper-btn',
    },

    scrollbar: false,

    autoplay: {
      delay: 5000,
    },
  });

  const samplesSwiperPagination = document.querySelector('.samples-list');
  const samplesSwiper = new Swiper('.samples-swiper', {
    direction: 'vertical',
    loop: false,

    effect: 'slide',

    speed: 500,

    mousewheel: {
      releaseOnEdges: true,
      // eventsTarget: '.samples-container'
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
    },

    autoplay: {
      delay: 5000,
    },
  });

  const keysSwiper = new Swiper('.keyes-swiper', {
    direction: 'horizontal',
    loop: true,

    effect: 'fade',

    fadeEffect: {
      crossFade: true
    },

    speed: 500,

    pagination: {
      el: '.keyes-swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        const currEl = document.querySelector('.keyes-swiper-pagination__current');
        const totalEl = document.querySelector('.keyes-swiper-pagination__total');

        currEl.innerHTML = current < 10 ? `0${current}` : current;
        totalEl.innerHTML = total < 10 ? `0${total}` : total;
      }
    },

    navigation: {
      nextEl: '.keyes-swiper-btn',
    },

    autoplay: {
      delay: 5000,
    },
  });

  const workSwiper = new Swiper('.work-swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    speed: 1200,

    pagination: {
      el: '.work-swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        const currEl = document.querySelector('.work-swiper-pagination__current');
        const totalEl = document.querySelector('.work-swiper-pagination__total');

        currEl.innerHTML = current < 10 ? `0${current}` : current;
        totalEl.innerHTML = total < 10 ? `0${total}` : total;
      }
    },

    navigation: {
      nextEl: '.work-swiper-btn',
    },

    autoplay: {
      delay: 5000,
    },
  });

  const newsSwiper = new Swiper('.news-swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 500,

    pagination: {
      el: '.news-swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        const currEl = document.querySelector('.news-swiper-pagination__current');
        const totalEl = document.querySelector('.news-swiper-pagination__total');

        currEl.innerHTML = current < 10 ? `0${current}` : current;
        totalEl.innerHTML = total < 10 ? `0${total}` : total;
      }
    },

    navigation: {
      nextEl: '.news-swiper-btn',
    },

    autoplay: {
      delay: 5000,
    },
  });

  // HEADER
  const header = document.querySelector('.header');
  const headerMenu = document.querySelector('.header-menu');
  const headerMenuBtn = document.querySelector('.header-menu-btn');
  headerMenuBtn.onclick = () => {
    headerMenuBtn.classList.toggle('_active');
    headerMenu.classList.toggle('_active');
    page.classList.toggle('_scroll-disabled')
  }

  function hideHeaderCallback() {
    let lastPos = 0;

    return () => {
      if (window.scrollY <= 100) {
        header.classList.add('_active');
      } else {
        if (lastPos - window.scrollY <= -100 && !headerMenuBtn.classList.contains('_active')) {
          lastPos = window.scrollY;
          header.classList.remove('_active');
        } else if (lastPos - window.scrollY >= 100) {
          lastPos = window.scrollY;
          header.classList.add('_active');
        }
      }
    }
  }

  const hideHeader = hideHeaderCallback();

  document.addEventListener('scroll', hideHeader);


  class Select {
    constructor(wrapper) {
      this.wrapper = document.querySelector(wrapper);
      this.btn = this.wrapper.querySelector('.custom-select-btn');
      this.btnText = this.btn.querySelector('.custom-select-btn__text');
      this.list = this.wrapper.querySelector('.custom-select-list');
      this.valueInput = this.wrapper.querySelector('.custom-select__input')
      this.init();
    }

    init() {
      this.btn.addEventListener('click', (e) => this.openList.call(this, e));
      [...this.list.children].forEach(item => {
        if (item.classList.contains('placeholder')) {
          this.btnText.innerHTML = item.innerHTML;
          this.btn.classList.add('placeholder');
        }
        item.addEventListener('click', this.setValue.bind(this, item));
      });
      document.addEventListener('click', (e) => {
        if (e.target !== this.btn) {
          this.closeList();
        }
      })
    }

    openList(e) {
      this.btn.classList.toggle('_open');
      this.list.classList.toggle('_open');
    }

    closeList() {
      this.btn.classList.remove('_open');
      this.list.classList.remove('_open');
    }

    setValue(item) {
      if (item.classList.contains('placeholder')) {
        this.btn.classList.add('placeholder');
      } else {
        this.btn.classList.remove('placeholder');
        const value = item.dataset.value;
        this.valueInput.value = value;
        this.btnText.innerHTML = item.innerHTML;
        this.closeList();
      }
    }
  }

  const orderSquareSelect = new Select('#square-select');
  const orderRegionSelect = new Select('#region-select');

  // sections animation


})