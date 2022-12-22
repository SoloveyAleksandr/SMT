document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('body');

  const relax = document.querySelector('.rellax') && new Rellax('.rellax', {
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
    allowTouchMove: false,
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
  });

  const keysSwiper = new Swiper('.keyes-swiper', {
    direction: 'horizontal',
    loop: true,

    effect: 'fade',

    speed: 0,

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
    effect: 'coverflow',
    speed: 1300,

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


  const orderSquareSelect = document.querySelector('#square-select') && new Select('#square-select');
  const orderRegionSelect = document.querySelector('#region-select') && new Select('#region-select');


  class DropdownBtn {
    constructor(containerSelector) {
      this.container = document.querySelector(containerSelector);
      this.btn = this.container.querySelector('.dropdown-btn');
      this.content = this.container.querySelector('.dropdown-content');

      this.init();
    }

    init() {
      this.btn.onclick = () => {
        if (this.btn.classList.contains('_active')) {
          this.closeContent();
        } else {
          this.openContent();
        }
      }
    }

    openContent() {
      this.btn.classList.add('_active');
      this.content.classList.add('_active');
    }

    closeContent() {
      this.btn.classList.remove('_active');
      this.content.classList.remove('_active');
    }
  }

  document.querySelector('.dropdown-catalog-btn') &&
    new DropdownBtn('.dropdown-catalog-btn');

  // sections animation

  // GSAP 

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // partners img animation
  const TL_1 = gsap.timeline({ repeat: -1 })
  if (document.querySelector('.partners-list')) {
    TL_1.from(".partners-anim-img_1", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_1.to(".partners-anim-img_1", {
      scale: 0,
      x: "100%",
      y: "100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_1.from(".partners-anim-img_2", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_1.to(".partners-anim-img_2", {
      scale: 0,
      x: "100%",
      y: "100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_1.from(".partners-anim-img_3", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_1.to(".partners-anim-img_3", {
      scale: 0,
      x: "100%",
      y: "100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_1.from(".partners-anim-img_4", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_1.to(".partners-anim-img_4", {
      scale: 0,
      x: "100%",
      y: "100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_1.from(".partners-anim-img_5", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_1.to(".partners-anim-img_5", {
      scale: 0,
      x: "100%",
      y: "100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_1.from(".partners-anim-img_6", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_1.to(".partners-anim-img_6", {
      scale: 0,
      x: "100%",
      y: "100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })
  }

  // clients img animation
  const TL_2 = gsap.timeline({ repeat: -1 })
  if (document.querySelector('.clients-list')) {
    TL_2.from(".clients-anim-img_1", {
      scale: 0,
      x: "100%",
      y: "100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_2.to(".clients-anim-img_1", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_2.from(".clients-anim-img_2", {
      scale: 0,
      x: "100%",
      y: "100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_2.to(".clients-anim-img_2", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_2.from(".clients-anim-img_3", {
      scale: 0,
      x: "100%",
      y: "100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_2.to(".clients-anim-img_3", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_2.from(".clients-anim-img_4", {
      scale: 0,
      x: "100%",
      y: "100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_2.to(".clients-anim-img_4", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_2.from(".clients-anim-img_5", {
      scale: 0,
      x: "100%",
      y: "100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_2.to(".clients-anim-img_5", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_2.from(".clients-anim-img_6", {
      scale: 0,
      x: "100%",
      y: "100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_2.to(".clients-anim-img_6", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_2.from(".clients-anim-img_7", {
      scale: 0,
      x: "100%",
      y: "100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_2.to(".clients-anim-img_7", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })

    TL_2.from(".clients-anim-img_8", {
      scale: 0,
      x: "100%",
      y: "100%",
      duration: 2,
      ease: "power3.out",
    })
    TL_2.to(".clients-anim-img_8", {
      scale: 0,
      x: "-100%",
      y: "-100%",
      delay: 2,
      duration: 2,
      ease: "power3.out",
    })
  }


  // main swiper 
  if (document.querySelector('.main-swiper')) {
    gsap.from(".main-swiper", {
      x: "-200vh",
      opacity: 0,
      delay: 0.5,
      duration: 1,
    })
    gsap.from(".main-swiper-control", {
      x: "200vh",
      opacity: 0,
      delay: 0.5,
      duration: 1,
    })
  }



  // about 
  if (document.querySelector('.about')) {
    gsap.from(".about-anim_1", {
      duration: 2,
      x: "-100vh",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-inner",
        start: "top 90%",
        end: "bottom 10%",
      },
    })

    gsap.from(".about-anim_2", {
      duration: 2,
      x: "100vh",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-inner",
        start: "top 90%",
        end: "bottom 10%",
      },
    })
  }


  // samples
  if (document.querySelector('.samples')) {
    const samplesTL = gsap.timeline({
      defaults: {
        ease: "none"
      },
      scrollTrigger: {
        trigger: ".samples-container",
        end: '+=2000px',
        scrub: true,
        pin: true
      },
      onUpdate: () => {
        handleChangeSlides();
      }
    });

    samplesTL.to('.samples-swiper-progress', 0.1, { width: 100 + '%' });

    const samplesHandler = handleSamplesSlide();

    function handleChangeSlides() {
      const progress = Number(samplesTL.progress().toFixed(3));
      samplesHandler(progress);
    }

    function handleSamplesSlide() {
      const step = Number((1 / [...samplesSwiperPagination.children].length).toFixed(3));
      let prevValue = 0;
      return (value) => {
        if (value >= prevValue + step) {
          prevValue = prevValue + step;
          samplesSwiper.slideNext();
          return;
        } else if (value <= prevValue) {
          prevValue = prevValue - step;
          samplesSwiper.slidePrev();
        }
      }
    }

    const samplesBtns = gsap.utils.toArray('.samples-list__item');

    samplesBtns.forEach((item, index) => {

      item.addEventListener('click', () => {
        const itemPos = index ?
          samplesTL.scrollTrigger.start + (2000 / samplesBtns.length * (index + 1))
          : samplesTL.scrollTrigger.start;

        gsap.to(window, {
          duration: 0.5,
          scrollTo: {
            y: itemPos,
            autoKill: true,
          }
        });
      })
    })

    // HEADER
    const header = document.querySelector('.header');
    const headerMenu = document.querySelector('.header-menu');
    const headerMenuBtn = document.querySelector('.header-menu-btn');
    const headerMenuBg = document.querySelector('.header-menu-bg');
    const secondHeaderMenuBg = document.querySelector('.second-menu-bg');

    headerMenuBtn.onclick = toggleMenu;
    headerMenuBg.onclick = toggleMenu;

    if (secondHeaderMenuBg) {
      secondHeaderMenuBg.onclick = toggleMenu;
    }


    function toggleMenu() {
      headerMenuBtn && headerMenuBtn.classList.toggle('_active');
      headerMenu && headerMenu.classList.toggle('_active');
      headerMenuBg && headerMenuBg.classList.toggle('_active');
    }

    function hideHeaderCallback() {
      let lastPos = 0;

      return () => {
        if (window.scrollY < samplesTL.scrollTrigger.start || window.scrollY > samplesTL.scrollTrigger.end) {
          if (window.scrollY <= 400) {
            header.classList.add('_active');
          } else {
            if (lastPos - window.scrollY <= -50 && !headerMenuBtn.classList.contains('_active')) {
              lastPos = window.scrollY;
              header.classList.remove('_active');
            } else if (lastPos - window.scrollY >= 50) {
              lastPos = window.scrollY;
              header.classList.add('_active');
            }
          }
        } else header.classList.remove('_active');
      }
    }

    const hideHeader = hideHeaderCallback();

    document.addEventListener('scroll', hideHeader);
  } else {
    // HEADER
    const header = document.querySelector('.header');
    const headerMenu = document.querySelector('.header-menu');
    const headerMenuBtn = document.querySelector('.header-menu-btn');
    const headerMenuBg = document.querySelector('.header-menu-bg');
    const secondHeaderMenuBg = document.querySelector('.second-menu-bg');

    if (headerMenuBtn) headerMenuBtn.onclick = toggleMenu;
    if (headerMenuBg) headerMenuBg.onclick = toggleMenu;
    if (secondHeaderMenuBg) secondHeaderMenuBg.onclick = toggleMenu;


    function toggleMenu() {
      headerMenuBtn && headerMenuBtn.classList.toggle('_active');
      headerMenu && headerMenu.classList.toggle('_active');
      headerMenuBg && headerMenuBg.classList.toggle('_active');
    }

    function hideHeaderCallback() {
      let lastPos = 0;

      return () => {
        if (window.scrollY <= 300) {
          header.classList.add('_active');
        } else {
          if (lastPos - window.scrollY <= -50 && !headerMenuBtn.classList.contains('_active')) {
            lastPos = window.scrollY;
            header.classList.remove('_active');
          } else if (lastPos - window.scrollY >= 50) {
            lastPos = window.scrollY;
            header.classList.add('_active');
          }
        }
      }
    }

    const hideHeader = hideHeaderCallback();

    document.addEventListener('scroll', hideHeader);
  }



  // feedback
  if (document.querySelector('.feedback')) {
    gsap.from(".feedback-anim_1", {
      duration: 2,
      x: "-100vh",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".feedback-container",
        start: "top 90%",
        end: "bottom 10%",
      },
    })

    gsap.from(".feedback-anim_2", {
      duration: 2,
      x: "100vh",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".feedback-container",
        start: "top 90%",
        end: "bottom 10%",
      },
    })
  }

  // services
  if (document.querySelector('.services')) {
    gsap.from(".services-list-item_1", {
      duration: 1.5,
      delay: 0.5,
      scale: 0,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-list-item_1",
        start: "top 90%",
        end: "bottom 10%",
      },
    })

    gsap.from(".services-list-item_2", {
      duration: 1.5,
      delay: 0.5,
      scale: 0,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-list-item_2",
        start: "top 90%",
        end: "bottom 10%",
      },
    })

    gsap.from(".services-list-item_3", {
      duration: 1.5,
      delay: 0.5,
      scale: 0,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-list-item_3",
        start: "top 90%",
        end: "bottom 10%",
      },
    })

    gsap.from(".services-list-item_4", {
      duration: 1.5,
      delay: 0.5,
      scale: 0,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-list-item_4",
        start: "top 90%",
        end: "bottom 10%",
      },
    })

    gsap.from(".services-list-item_5", {
      duration: 1.5,
      delay: 0.5,
      scale: 0,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-list-item_5",
        start: "top 90%",
        end: "bottom 10%",
      },
    })

    gsap.from(".services-list-item_6", {
      duration: 1.5,
      delay: 0.5,
      scale: 0,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-list-item_6",
        start: "top 90%",
        end: "bottom 10%",
      },
    })
  }

  if (document.querySelector('.history')) {
    const TL = gsap.timeline({
      scrollTrigger: {
        trigger: ".history-timeline_grey",
        start: "top 20%",
        end: "bottom 20%",
        scrub: true,
      },

      onUpdate: () => {
        timelineHeightHendler();
      }
    });

    TL.to('.history-timeline_green', 0.1, { height: 100 + '%' });

    function timelineHeightHendler() {
      const progress = Number(TL.progress().toFixed(3));
      TL.set(".history-timeline_green", {
        height: progress * 100 + "%",
      });
    }

    const lines = gsap.utils.toArray('.history-list-item__line');

    lines.forEach((line) => {
      gsap.to(line, {
        width: '100%',
        duration: 2,
        scrollTrigger: {
          trigger: line,
          start: "top 50%",
          end: "bottom 50%",
        },
      })
    })

    const minTimeLines = gsap.utils.toArray('.history-list-item-img_green');
    const minTimeLinesTrigger = gsap.utils.toArray('.history-list-item-img_grey');
    minTimeLines.forEach((time, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: minTimeLinesTrigger[index],
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
        },
        onUpdate: () => {
          timelineHeightHendler();
        }
      });

      tl.to(time, 0.1, { height: 100 + '%' });

      function timelineHeightHendler() {
        const progress = Number(tl.progress().toFixed(3));
        tl.set(time, {
          height: progress * 100 + "%",
        });
      }
    })

    const historyItems = gsap.utils.toArray('.history-list-item');
    historyItems.forEach((item, index) => {
      gsap.from(item, {
        x: `${index % 2 > 0 ? '' : '-'}100vh`,
        duration: 1.5,
        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
        }
      })
    })
  }

  if (document.querySelector('.certificate-swiper')) {
    const certificateSwiper = new Swiper('.certificate-swiper', {
      loop: true,
      loopedSlides: 4,
      effect: 'fade',

      pagination: {
        el: '.certificate-swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          const currEl = document.querySelector('.certificate-swiper-pagination__current');
          const totalEl = document.querySelector('.certificate-swiper-pagination__total');

          currEl.innerHTML = current < 10 ? `0${current}` : current;
          totalEl.innerHTML = total < 10 ? `0${total}` : total;
        }
      },

      navigation: {
        nextEl: '.certificate-swiper-btn',
      },

    });

    const certificateThumbs = new Swiper('.certificate-thumbs', {
      slidesPerView: 2,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 4,
    });

    certificateSwiper.controller.control = certificateThumbs;
    certificateThumbs.controller.control = certificateSwiper;
  }

  if (document.querySelector('.vacancy')) {

    class VacancyInfoItem {
      constructor(container) {
        this.container = container;
        this.btn = container.querySelector('.vacancy-list-item__btn');
        this.infoList = container.querySelector('.vacancy-info-list');
        this.init();
      }

      init() {
        this.btn.addEventListener('click', () => this.toggleOpen.call(this))
        // console.log(this)
      }

      toggleOpen() {
        this.infoList.classList.toggle('_active');
        this.btn.classList.toggle('_active');
      }
    }

    const infoItems = gsap.utils.toArray('.vacancy-list-item');
    infoItems.forEach(item => new VacancyInfoItem(item));

  }

  if (document.querySelector('.resume-form')) {
    const fileInput = document.querySelector('.resume-form-resume__input');
    const fileName = document.querySelector('.resume-form-resume__file');

    fileInput.onchange = () => {
      if (fileInput.value) {
        const file = fileInput.value.split('\\');
        fileName.innerText = file[file.length - 1];
      }
    };
  }

  if (document.querySelector('.service-for')) {
    const animItems = gsap.utils.toArray('.service-for__item');

    animItems.forEach(item => {
      gsap.from(item, {
        y: '-10rem',
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
        }
      })
    })
  }

  if (document.querySelector('.service-form')) {
    gsap.from('.service-form-anim_1', {
      x: '-100vw',
      duration: 1.5,
      ease: 'back.out(1)',
      scrollTrigger: {
        trigger: '.service-form',
        start: 'top 50%',
      }
    })

    gsap.from('.service-form-anim_2', {
      x: '100vw',
      duration: 1.5,
      delay: 0.5,
      ease: 'back.out(1)',
      scrollTrigger: {
        trigger: '.service-form',
        start: 'top 50%',
      }
    })
  }

})