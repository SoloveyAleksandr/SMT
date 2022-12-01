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

const keysSwiper = new Swiper('.keyes-swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'slide',
  speed: 500,

  pagination: {
    el: '.keyes-swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.keyes-swiper-btn',
  }
})

const headerMenuBtn = document.querySelector('.header-menu-btn');
headerMenuBtn.onclick = () => {
  headerMenuBtn.classList.toggle('_active');
}

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


