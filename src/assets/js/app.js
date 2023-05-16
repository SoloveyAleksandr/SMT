document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('body');

  class VacancyInfoItem {
    constructor(container) {
      this.container = container;
      this.btn = container.querySelector('.vacancy-list-item__btn');
      this.infoList = container.querySelector('.vacancy-info-list');
      this.init();
    }

    init() {
      this.btn.addEventListener('click', () => this.toggleOpen.call(this))
    }

    toggleOpen() {
      this.infoList.classList.toggle('_active');
      this.btn.classList.toggle('_active');
    }
  }

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

  if (document.querySelector('.samples')) {
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

    [...samplesSwiperPagination.children].forEach((item, id) => {
      item.onclick = () => samplesSwiper.slideTo(id);
    });
  }

  const keysSwiper = new Swiper('.keyes-swiper', {
    direction: 'horizontal',
    loop: true,
    autoHeight: true,

    effect: 'slide',

    speed: 1000,

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

  const workSwiperTitleList = gsap.utils.toArray(".work-swiper .work-swiper__title");
  const workSwiperInfoTitles = gsap.utils.toArray(".work .work-info__title");

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

        if (workSwiperTitleList.length <= total) {
          workSwiperInfoTitles.forEach(title => {
            title.innerText = workSwiperTitleList[current - 1].innerText;
          })
        }
      }
    },

    navigation: {
      nextEl: '.work-swiper-btn',
    },

    autoplay: {
      delay: 5000,
    },
  });

  const newsSwiperTitleList = gsap.utils.toArray(".news-swiper .news-swiper-slide__title");
  const newsSwiperTitle = document.querySelector(".news-swiper .news-control__title");

  const newsSwiper = new Swiper('.news-swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    // effect: 'coverflow',
    speed: 1300,

    pagination: {
      el: '.news-swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        const currEl = document.querySelector('.news-swiper-pagination__current');
        const totalEl = document.querySelector('.news-swiper-pagination__total');

        currEl.innerHTML = current < 10 ? `0${current}` : current;
        totalEl.innerHTML = total < 10 ? `0${total}` : total;

        if (newsSwiperTitle && newsSwiperTitleList.length >= total) {
          newsSwiperTitle.innerText = newsSwiperTitleList[current - 1].innerText;
        }
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
      this.wrapper = wrapper;
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
        } else {
          item.addEventListener('click', this.setValue.bind(this, item));
        }
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


  // const orderSquareSelect = document.querySelector('#square-select') && new Select('#square-select');
  // const orderRegionSelect = document.querySelector('#region-select') && new Select('#region-select');
  const customSelectWrappers = gsap.utils.toArray(".custom-select-wrapper");
  if (customSelectWrappers.length > 0) {
    customSelectWrappers.forEach(wrapper => {
      new Select(wrapper);
    })
  }


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
  if (document.querySelector(".partners")) {
    const templateImgs = document.querySelector(".partners template").content.children;
    const animItems = document.querySelectorAll(".partners .partners-list-item");

    for (let i = 0; i < animItems.length; i++) {
      const tl = gsap.timeline({ repeat: -1 });
      const fragment = document.createDocumentFragment();

      for (let img = 0; img < templateImgs.length; img++) {
        const index = (i + img) % templateImgs.length;
        const newImg = templateImgs[index].cloneNode(true);
        fragment.appendChild(newImg);
        tl.from(newImg, {
          scale: 0,
          x: "-100%",
          y: "-100%",
          duration: 2,
          ease: "power3.out",
        })
        tl.to(newImg, {
          scale: 0,
          x: "100%",
          y: "100%",
          delay: 2,
          duration: 2,
          ease: "power3.out",
        })
      }

      animItems[i].appendChild(fragment);
    }
  }

  // clients img animation
  if (document.querySelector(".clients")) {
    const templateImgs = document.querySelector(".clients template").content.children;
    const animItems = document.querySelectorAll(".clients .clients-list-item");

    for (let i = 0; i < animItems.length; i++) {
      const tl = gsap.timeline({ repeat: -1 });
      const fragment = document.createDocumentFragment();

      for (let img = 0; img < templateImgs.length; img++) {
        const index = (i + img) % templateImgs.length;
        const newImg = templateImgs[index].cloneNode(true);
        fragment.appendChild(newImg);
        tl.from(newImg, {
          scale: 0,
          x: "100%",
          y: "100%",
          duration: 2,
          ease: "power3.out",
        })
        tl.to(newImg, {
          scale: 0,
          x: "-100%",
          y: "-100%",
          delay: 2,
          duration: 2,
          ease: "power3.out",
        })
      }

      animItems[i].appendChild(fragment);
    }
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
  // if (document.querySelector('.samples')) {
  //   const samplesTL = gsap.timeline({
  //     defaults: {
  //       ease: "none"
  //     },
  //     scrollTrigger: {
  //       trigger: ".samples-container",
  //       end: '+=2000px',
  //       scrub: true,
  //       pin: true
  //     },
  //     onUpdate: () => {
  //       handleChangeSlides();
  //     }
  //   });

  //   samplesTL.to('.samples-swiper-progress', 0.1, { width: 100 + '%' });

  //   const samplesHandler = handleSamplesSlide();

  //   function handleChangeSlides() {
  //     const progress = Number(samplesTL.progress().toFixed(3));
  //     samplesHandler(progress);
  //   }

  //   function handleSamplesSlide() {
  //     const step = Number((1 / [...samplesSwiperPagination.children].length).toFixed(3));
  //     let prevValue = 0;
  //     return (value) => {
  //       if (value >= prevValue + step) {
  //         prevValue = prevValue + step;
  //         samplesSwiper.slideNext();
  //         return;
  //       } else if (value <= prevValue) {
  //         prevValue = prevValue - step;
  //         samplesSwiper.slidePrev();
  //       }
  //     }
  //   }

  //   const samplesBtns = gsap.utils.toArray('.samples-list__item');

  //   samplesBtns.forEach((item, index) => {

  //     item.addEventListener('click', () => {
  //       const itemPos = index ?
  //         samplesTL.scrollTrigger.start + (2000 / samplesBtns.length * (index + 1))
  //         : samplesTL.scrollTrigger.start;

  //       gsap.to(window, {
  //         duration: 0.5,
  //         scrollTo: {
  //           y: itemPos,
  //           autoKill: true,
  //         }
  //       });
  //     })
  //   })

  //   // HEADER
  //   const header = document.querySelector('.header');
  //   const headerMenu = document.querySelector('.header-menu');
  //   const headerMenuBtn = document.querySelector('.header-menu-btn');
  //   const headerMenuBg = document.querySelector('.header-menu-bg');
  //   const secondHeaderMenuBg = document.querySelector('.second-menu-bg');

  //   headerMenuBtn.onclick = toggleMenu;
  //   headerMenuBg.onclick = toggleMenu;

  //   if (secondHeaderMenuBg) {
  //     secondHeaderMenuBg.onclick = toggleMenu;
  //   }


  //   function toggleMenu() {
  //     headerMenuBtn && headerMenuBtn.classList.toggle('_active');
  //     headerMenu && headerMenu.classList.toggle('_active');
  //     headerMenuBg && headerMenuBg.classList.toggle('_active');
  //   }

  //   function hideHeaderCallback() {
  //     let lastPos = 0;

  //     return () => {
  //       if (window.scrollY < samplesTL.scrollTrigger.start || window.scrollY > samplesTL.scrollTrigger.end) {
  //         if (window.scrollY <= 400) {
  //           header.classList.add('_active');
  //         } else {
  //           if (lastPos - window.scrollY <= -50 && !headerMenuBtn.classList.contains('_active')) {
  //             lastPos = window.scrollY;
  //             header.classList.remove('_active');
  //           } else if (lastPos - window.scrollY >= 50) {
  //             lastPos = window.scrollY;
  //             header.classList.add('_active');
  //           }
  //         }
  //       } else header.classList.remove('_active');
  //     }
  //   }

  //   const hideHeader = hideHeaderCallback();

  //   document.addEventListener('scroll', hideHeader);
  // } else {
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
  // }



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

  const historyContainer = document.querySelector(".history");
  if (historyContainer) {
    const historyItems = historyContainer.querySelectorAll(".history-list-item");

    const TL = gsap.timeline({
      scrollTrigger: {
        trigger: historyContainer,
        start: "top 40%",
        end: "bottom 40%",
        scrub: true,
      },
    })

    historyItems.forEach((item, i) => {
      const inner = item.querySelector(".history-list-item__inner");
      const date = item.querySelector(".history-list-item-date");
      const clone = date.cloneNode(true);
      clone.classList.add("_clone");
      item.appendChild(clone);

      TL.from(date, {
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.from(inner, {
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          end: "bottom 70%",
        },
        x: window.matchMedia("(min-width: 1025px)").matches ? i % 2 > 0 ? "100%" : "-100%" : "-100%",
        opacity: 0,
        duration: 1,
        onStart: () => {
          item.classList.add("_active");
        }
      });
    });

    // const TL = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".history-timeline_grey",
    //     start: "top 20%",
    //     end: "bottom 20%",
    //     scrub: true,
    //   },

    //   onUpdate: () => {
    //     timelineHeightHendler();
    //   }
    // });

    // TL.to('.history-timeline_green', 0.1, { height: 100 + '%' });

    // function timelineHeightHendler() {
    //   const progress = Number(TL.progress().toFixed(3));
    //   TL.set(".history-timeline_green", {
    //     height: progress * 100 + "%",
    //   });
    // }

    // const lines = gsap.utils.toArray('.history-list-item__line');

    // lines.forEach((line) => {
    //   gsap.to(line, {
    //     width: '100%',
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: line,
    //       start: "top 50%",
    //       end: "bottom 50%",
    //     },
    //   })
    // })

    // const minTimeLines = gsap.utils.toArray('.history-list-item-img_green');
    // const minTimeLinesTrigger = gsap.utils.toArray('.history-list-item-img_grey');
    // minTimeLines.forEach((time, index) => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: minTimeLinesTrigger[index],
    //       start: "top 50%",
    //       end: "bottom 50%",
    //       scrub: true,
    //     },
    //     onUpdate: () => {
    //       timelineHeightHendler();
    //     }
    //   });

    //   tl.to(time, 0.1, { height: 100 + '%' });

    //   function timelineHeightHendler() {
    //     const progress = Number(tl.progress().toFixed(3));
    //     tl.set(time, {
    //       height: progress * 100 + "%",
    //     });
    //   }
    // })

    // const historyItems = gsap.utils.toArray('.history-list-item');
    // historyItems.forEach((item, index) => {
    //   gsap.from(item, {
    //     x: `${index % 2 > 0 ? '' : '-'}100vh`,
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: item,
    //       start: 'top 50%',
    //     }
    //   })
    // })
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

    const infoItems = gsap.utils.toArray('.vacancy-list-item');
    infoItems.forEach(item => new VacancyInfoItem(item));

  }

  if (document.querySelector('.resume-form-form')) {
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

  // example
  if (document.querySelector('.example')) {
    const btnsSlider = new Swiper('.example-btns-slider', {
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
    });

    const infoSlider = new Swiper('.example-slider', {
      loop: true,
      effect: 'slide',
      navigation: {
        nextEl: '.example-btns__btn-next',
        prevEl: '.example-btns__btn-prev',
      },
      allowTouchMove: false,
      thumbs: {
        swiper: btnsSlider,
      },
      watchSlidesProgress: true,
      pagination: {
        el: '.example-select-list',
        clickable: true,
        type: 'custom',
        bulletClass: 'pagination-bullet',
      },
    });

    const galleryWrappers = gsap.utils.toArray('.example-slider-slide');
    galleryWrappers.forEach(slide => {
      const slider = slide.querySelector('.example-slider-slide__swiper');
      const btn = slide.querySelector('.example-slider-slide-btn');
      const pagination = slide.querySelector('.example-slider-slide-pagination');
      const currEl = slide.querySelector('.example-slider-slide-pagination__current');
      const totalEl = slide.querySelector('.example-slider-slide-pagination__total');

      new Swiper(slider, {
        loop: true,
        effect: 'fade',

        navigation: {
          nextEl: btn,
        },

        pagination: {
          el: pagination,
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            currEl.innerHTML = current < 10 ? `0${current}` : current;
            totalEl.innerHTML = total < 10 ? `0${total}` : total;
          }
        },
      });
    });

    class SliderSelect {
      constructor(select) {
        this.container = document.querySelector(select);
        this.btn = this.container.querySelector('.example-select-btn');
        this.btnText = this.container.querySelector('.example-select-btn__text');
        this.list = this.container.querySelector('.example-select-list');
        this.init();
      }

      init() {
        this.btn.onclick = this.toggleActive.bind(this);
        [...this.list.children].forEach(item => {
          if (item.classList.contains('_active')) {
            this.btnText.innerText = item.innerText;
          }
          item.onclick = this.selectSlide.bind(this, item);
        })
      }

      toggleActive() {
        this.btn.classList.toggle('_active');
        this.list.classList.toggle('_active');
      }

      selectSlide(item) {
        this.toggleActive();
        this.btnText.innerText = item.innerText;
        [...this.list.children].forEach((li, index) => {
          li.classList.remove('_active');
          if (li === item) {
            li.classList.add('_active');
          }
        });
      }
    }

    new SliderSelect('.example-select');
  }

  if (document.querySelector('.cases')) {
    const animList = gsap.utils.toArray('.cases-list-item');
    animList.forEach((item, index) => {
      const img = item.querySelector('.cases-list-item-img');
      const info = item.querySelector('.cases-list-item__info');

      gsap.from(img, {
        x: index % 2 > 0 ? '100%' : '-100%',
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
          end: 'bottom 50%',
        }
      })

      gsap.from(info, {
        x: index % 2 > 0 ? '-100%' : '100%',
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
          end: 'bottom 50%',
        }
      })
    })
  }

  if (document.querySelector('.case')) {
    const materialsSwiper = new Swiper('.case-materials-swiper', {
      direction: 'horizontal',
      loop: true,
      effect: 'slide',
      speed: 800,

      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,

      pagination: {
        el: '.case-swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          const currEl = document.querySelector('.case-swiper-pagination__current');
          const totalEl = document.querySelector('.case-swiper-pagination__total');

          currEl.innerHTML = current < 10 ? `0${current}` : current;
          totalEl.innerHTML = total < 10 ? `0${total}` : total;
        }
      },

      navigation: {
        nextEl: '.case-swiper-btn',
      },

      autoplay: {
        delay: 5000,
      },

      breakpoints: {
        1331: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
          speed: 1300,
        },
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
          speed: 1300,
        },
        851: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          speed: 1300,
          spaceBetween: 20,
        },
        651: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        }
      },
    });
  }

  if (document.querySelector('.questions')) {
    const items = gsap.utils.toArray('.questions-list-item');
    items.forEach((item, index) => {
      new VacancyInfoItem(item);
    })
  }

  if (document.querySelector('.questions')) {
    const items = gsap.utils.toArray('.questions-list-item');
    items.forEach((item, index) => {
      gsap.from(item, {
        x: '-100%',
        opacity: 0,
        duration: 0.5,
        delay: index ? 0.3 * index : 0,
      })
    })
  }

  if (document.querySelector('.error')) {
    const items = gsap.utils.toArray('.error-code__item');
    items.forEach((item, index) => {
      if (index !== items.length - 1) {
        const tl = gsap.timeline({
          delay: index ? index * 0.2 : 0,
          duration: 1.2,
          repeat: -1,
        });
        tl.from(item, {
          opacity: 0,
        })
        tl.to(item, {
          opacity: 0,
        })
      }
    })
  }

  if (document.querySelector('.news-page')) {
    const items = gsap.utils.toArray('.news-page-list-item__text');
    items.forEach(item => {
      const text = item.innerText;
      if (text.length > 160) {
        item.innerText = text.slice(0, 160) + '...';
      }
    })
  }

  if (document.querySelector('.contacts')) {
    const swiper = new Swiper('.contacts-swiper', {
      direction: 'horizontal',
      loop: true,

      effect: 'slide',

      speed: 1000,

      allowTouchMove: false,

      pagination: {
        el: '.contacts-head-buttons',
        clickable: true,
        type: 'custom',
        bulletClass: 'pagination-bullet',
        currentClass: '_active'
      },
    })

    const btns = gsap.utils.toArray('.contacts-head-buttons__btn');
    const map = document.querySelector('.contacts-map__frame');
    btns.forEach(btn => {
      btn.onclick = () => {
        btns.forEach(b => {
          b.classList.remove('_active');
        })
        btn.classList.add('_active');
        if (map) {
          const src = btn.getAttribute('data-src');
          map.src = src;
        }
      }
    })

    class SliderSelect {
      constructor(select) {
        this.container = document.querySelector(select);
        this.btn = this.container.querySelector('.example-select-btn');
        this.btnText = this.container.querySelector('.example-select-btn__text');
        this.list = this.container.querySelector('.example-select-list');
        this.init();
      }

      init() {
        this.btn.onclick = this.toggleActive.bind(this);
        [...this.list.children].forEach((item, index) => {
          if (item.classList.contains('_active')) {
            this.btnText.innerText = item.innerText;
          }
          item.onclick = this.selectSlide.bind(this, item);
        })
      }

      toggleActive() {
        this.btn.classList.toggle('_active');
        this.list.classList.toggle('_active');
      }

      selectSlide(item, index) {
        this.toggleActive();
        this.btnText.innerText = item.innerText;
        [...this.list.children].forEach((li, index) => {
          li.classList.remove('_active');
          if (li === item) {
            li.classList.add('_active');
            swiper.slideTo(index + 1);
          }
        });
        if (map) {
          const src = item.getAttribute('data-src');
          map.src = src;
        }
      }
    }

    new SliderSelect('.contacts');

    const mapBtns = gsap.utils.toArray('.contacts-swiper-slide-list-item__btn');
    const schameContainer = document.querySelector('.contacts-scheme');
    const schameBg = document.querySelector('.contacts-scheme-bg');
    const schameBtn = document.querySelector('.contacts-scheme-map__btn');
    const schameMap = document.querySelector('.contacts-scheme-map__frame');

    if (schameContainer && schameBg && schameBtn && schameMap && mapBtns) {
      const closeMap = () => {
        schameContainer.classList.remove('_active');
      }

      const openMap = (target) => {
        const src = target.getAttribute('data-src');
        schameContainer.classList.add('_active');
        if (schameMap.src !== src) {
          schameMap.src = src;
        }
      }

      schameBg.onclick = closeMap;
      schameBtn.onclick = closeMap;

      mapBtns.forEach(btn => {
        btn.onclick = (e) => openMap(e.target);
      })
    }
  }

  if (document.querySelector('.documentation')) {
    const input = document.getElementById('documentation-input');
    const list = gsap.utils.toArray('.documentation-list-item');

    input.oninput = (e) => {
      const value = e.target.value.toLocaleLowerCase();
      list.forEach(item => {
        const text = item.querySelector('.documentation-list-item__name').innerText.toLocaleLowerCase();
        if (!text.includes(value)) {
          item.style.display = 'none';
        } else {
          item.style.display = 'flex';
        }
      })
    }
  }

  if (document.querySelector('.video')) {
    new Swiper('.video-swiper', {
      direction: 'horizontal',
      loop: true,
      effect: 'slide',
      speed: 1500,
      spaceBetween: 100,

      pagination: {
        el: '.video-swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          const currEl = document.querySelector('.video-swiper-pagination__current');
          const totalEl = document.querySelector('.video-swiper-pagination__total');

          currEl.innerHTML = current < 10 ? `0${current}` : current;
          totalEl.innerHTML = total < 10 ? `0${total}` : total;
        }
      },

      navigation: {
        nextEl: '.video-swiper-btn',
      },

      scrollbar: false,

      autoplay: {
        delay: 5000,
      },
    });
  }

  if (document.querySelector('.materials-nav')) {
    class Navigation {
      constructor(list, btn) {
        this.list = document.querySelector(list);
        this.btn = document.querySelector(btn);
        this.init();
      }

      init() {
        this.btn.onclick = () => {
          if (this.list.classList.contains('_active')) {
            this.list.classList.remove('_active');
            this.btn.innerText = 'Развернуть...';
          } else {
            this.list.classList.add('_active');
            this.btn.innerText = 'Свернуть...';
          }
        }
      }
    }

    new Navigation('.materials-nav-list', '.materials-nav__btn');
  }

  if (document.querySelector('.material-docs')) {
    class MySwiper {
      constructor() {
        this.init();
      };

      init() {
        if (!this.swiper && window.innerWidth <= 650) {
          this.createSwiper();
        }
        window.addEventListener('resize', (e) => {
          const width = e.currentTarget.innerWidth;
          if (this.swiper && width >= 651) {
            this.destroySwiper();
          } else if (!this.swiper && width <= 650) {
            this.createSwiper();
          }
        })
      }

      createSwiper() {
        this.swiper = new Swiper('.material-docs-swiper', {
          direction: 'horizontal',
          loop: true,
          effect: 'slide',
          speed: 1000,
          spaceBetween: 100,

          pagination: {
            el: '.material-docs-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              const currEl = document.querySelector('.material-docs-swiper-pagination__current');
              const totalEl = document.querySelector('.material-docs-swiper-pagination__total');

              currEl.innerHTML = current < 10 ? `0${current}` : current;
              totalEl.innerHTML = total < 10 ? `0${total}` : total;
            }
          },

          navigation: {
            nextEl: '.material-docs-swiper-btn',
          },

          scrollbar: false,
        });
      };

      destroySwiper() {
        this.swiper.destroy(true, true);
        this.swiper = null;
      }
    }

    new MySwiper();
  }

  if (document.querySelector('.material-any')) {
    class MySwiper {
      constructor() {
        this.init();
      };

      init() {
        if (!this.swiper && window.innerWidth <= 850) {
          this.createSwiper();
        }
        window.addEventListener('resize', (e) => {
          const width = e.currentTarget.innerWidth;
          if (this.swiper && width >= 851) {
            this.destroySwiper();
          } else if (!this.swiper && width <= 850) {
            this.createSwiper();
          }
        })
      }

      createSwiper() {
        this.swiper = new Swiper('.material-any-swiper', {
          direction: 'horizontal',
          loop: true,
          effect: 'slide',
          speed: 1000,
          spaceBetween: 100,

          slidesPerView: 1,

          pagination: {
            el: '.material-any-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              const currEl = document.querySelector('.material-any-swiper-pagination__current');
              const totalEl = document.querySelector('.material-any-swiper-pagination__total');

              currEl.innerHTML = current < 10 ? `0${current}` : current;
              totalEl.innerHTML = total < 10 ? `0${total}` : total;
            }
          },

          navigation: {
            nextEl: '.material-any-swiper-btn',
          },

          scrollbar: false,

          breakpoints: {
            651: {
              slidesPerView: 2,
              spaceBetween: 20,
            }
          }
        });
      };

      destroySwiper() {
        this.swiper.destroy(true, true);
        this.swiper = null;
      }
    }

    new MySwiper();
  }

  if (document.querySelector('.object-nav')) {
    class Navigation {
      constructor(list, btn) {
        this.list = document.querySelector(list);
        this.btn = document.querySelector(btn);
        this.init();
      }

      init() {
        this.minH = [...this.list.children].reduce((acc, item, index) => {
          if (index <= 2) {
            return acc + item.clientHeight;
          }
          return acc;
        }, 0) / 10;

        this.maxH = [...this.list.children].reduce((acc, item, index) => {
          return acc + item.clientHeight;
        }, 0) / 10;

        const width = window.innerWidth;
        if (width <= 1330) {
          this.btn.innerText = 'Развернуть...';
          this.list.style.maxHeight = `${this.minH}rem`;
        }

        this.btn.onclick = () => {
          if (window.innerWidth <= 1330) {
            if (this.list.classList.contains('_active')) {
              this.list.classList.remove('_active');
              this.btn.innerText = 'Развернуть...';
              this.list.style.maxHeight = `${this.minH}rem`;
            } else {
              this.list.classList.add('_active');
              this.btn.innerText = 'Свернуть...';
              this.list.style.maxHeight = `${this.maxH}rem`;
            }
          }
        }

        window.addEventListener('resize', (e) => this.widthCheck(e.currentTarget.innerWidth))
      }

      widthCheck(width) {
        if (width <= 1330) {
          if (this.list.classList.contains('_active')) {
            this.btn.innerText = 'Свернуть...';
            this.list.style.maxHeight = `${this.maxH}rem`;
          } else {
            this.btn.innerText = 'Развернуть...';
            this.list.style.maxHeight = `${this.minH}rem`;
          }
        } else {
          this.list.classList.add('_active');
          this.btn.innerText = 'Свернуть...';
          this.list.style.maxHeight = `${this.maxH}rem`;
        }
      }
    }

    new Navigation('.object-nav-list', '.object-nav__btn');
  }

  // if (document.querySelector('.object-type-swiper_eco')) {
  //   new Swiper('.object-type-swiper_eco', {
  //     direction: 'horizontal',
  //     loop: true,
  //     effect: 'slide',
  //     speed: 800,

  //     pagination: {
  //       el: '.object-type-swiper-pagination_eco',
  //       type: 'custom',
  //       renderCustom: function (swiper, current, total) {
  //         const currEl = document.querySelector('.object-type-swiper-pagination__current_eco');
  //         const totalEl = document.querySelector('.object-type-swiper-pagination__total_eco');

  //         currEl.innerHTML = current < 10 ? `0${current}` : current;
  //         totalEl.innerHTML = total < 10 ? `0${total}` : total;
  //       }
  //     },

  //     navigation: {
  //       nextEl: '.object-type-swiper-btn_eco',
  //     },

  //     scrollbar: false,
  //   });
  // }

  // if (document.querySelector('.object-type-swiper_standard')) {
  //   new Swiper('.object-type-swiper_standard', {
  //     direction: 'horizontal',
  //     loop: true,
  //     effect: 'slide',
  //     speed: 800,

  //     pagination: {
  //       el: '.object-type-swiper-pagination_standard',
  //       type: 'custom',
  //       renderCustom: function (swiper, current, total) {
  //         const currEl = document.querySelector('.object-type-swiper-pagination__current_standard');
  //         const totalEl = document.querySelector('.object-type-swiper-pagination__total_standard');

  //         currEl.innerHTML = current < 10 ? `0${current}` : current;
  //         totalEl.innerHTML = total < 10 ? `0${total}` : total;
  //       }
  //     },

  //     navigation: {
  //       nextEl: '.object-type-swiper-btn_standard',
  //     },

  //     scrollbar: false,
  //   });
  // }

  // if (document.querySelector('.object-type-swiper_vip')) {
  //   new Swiper('.object-type-swiper_vip', {
  //     direction: 'horizontal',
  //     loop: true,
  //     effect: 'slide',
  //     speed: 800,

  //     pagination: {
  //       el: '.object-type-swiper-pagination_vip',
  //       type: 'custom',
  //       renderCustom: function (swiper, current, total) {
  //         const currEl = document.querySelector('.object-type-swiper-pagination__current_vip');
  //         const totalEl = document.querySelector('.object-type-swiper-pagination__total_vip');

  //         currEl.innerHTML = current < 10 ? `0${current}` : current;
  //         totalEl.innerHTML = total < 10 ? `0${total}` : total;
  //       }
  //     },

  //     navigation: {
  //       nextEl: '.object-type-swiper-btn_vip',
  //     },

  //     scrollbar: false,
  //   });
  // }

  const objectTypeSwipers = document.querySelectorAll(".object-type-info-swiper");
  objectTypeSwipers.forEach(container => {
    const nextBtn = container.querySelector(".custom-swiper-btn");
    const pagEl = container.querySelector(".custom-swiper-pagination");
    const currEl = container.querySelector(".custom-swiper-pagination__current");
    const totalEl = container.querySelector(".custom-swiper-pagination__total");

    new Swiper(container, {
      direction: 'horizontal',
      loop: true,
      effect: 'slide',
      speed: 800,

      pagination: {
        el: pagEl,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          currEl.innerHTML = current < 10 ? `0${current}` : current;
          totalEl.innerHTML = total < 10 ? `0${total}` : total;
        }
      },

      navigation: {
        nextEl: nextBtn,
      },

      scrollbar: false,
    });
  })

  if (document.querySelector('.type-nav')) {
    class Navigation {
      constructor(list, btn) {
        this.list = document.querySelector(list);
        this.btn = document.querySelector(btn);
        this.init();
      }

      init() {
        this.setHeight();

        const width = window.innerWidth;

        if (width <= 1330) {
          this.btn.innerText = 'Развернуть...';
          this.list.style.maxHeight = `${this.minH}rem`;
        }

        this.btn.onclick = () => {
          if (window.innerWidth <= 1330) {
            if (this.list.classList.contains('_active')) {
              this.list.classList.remove('_active');
              this.btn.innerText = 'Развернуть...';
              this.list.style.maxHeight = `${this.minH}rem`;
            } else {
              this.list.classList.add('_active');
              this.btn.innerText = 'Свернуть...';
              this.list.style.maxHeight = `${this.maxH}rem`;
            }
          }
        }

        window.addEventListener('resize', (e) => this.widthCheck(e.currentTarget.innerWidth))
      }

      setHeight() {
        this.minH = [...this.list.children][0].clientHeight / 10;

        this.maxH = [...this.list.children].reduce((acc, item) => {
          return acc + item.clientHeight;
        }, 0) / 10;
      }

      widthCheck(width) {
        this.setHeight();

        if (width <= 1330) {
          if (this.list.classList.contains('_active')) {
            this.btn.innerText = 'Свернуть...';
            this.list.style.maxHeight = `${this.maxH}rem`;
          } else {
            this.btn.innerText = 'Развернуть...';
            this.list.style.maxHeight = `${this.minH}rem`;
          }
        } else {
          this.list.classList.add('_active');
          this.btn.innerText = 'Свернуть...';
          this.list.style.maxHeight = `${this.maxH}rem`;
        }
      }
    }

    new Navigation('.type-nav-list', '.type-nav__btn');
  }

  if (document.querySelector('.material-swiper-container')) {
    new Swiper('.material-swiper', {
      direction: 'horizontal',
      loop: true,
      effect: 'fade',
      speed: 800,

      pagination: {
        el: '.material-swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          const currEl = document.querySelector('.material-swiper-slide-pagination__current');
          const totalEl = document.querySelector('.material-swiper-slide-pagination__total');

          currEl.innerHTML = current < 10 ? `0${current}` : current;
          totalEl.innerHTML = total < 10 ? `0${total}` : total;
        }
      },

      navigation: {
        nextEl: '.material-swiper-btn',
      },

      scrollbar: false,
    });
  }

  // MAIN
  const video = document.querySelector('.main-gif__img');

  if (video) {
    video.onclick = () => {
      video.paused ? video.play() : video.pause();
    }
  }
  // <==

  // TYPE 
  if (document.querySelector('.type-info-head-img_animated-js')) {
    const animList = gsap.utils.toArray('.type-info-head-img_animated-js');

    if (window.matchMedia("(max-width: 1330px)").matches) {
      const tl = gsap.timeline({
        delay: 1,
      });

      animList.forEach((item, index) => {
        tl.from(item, {
          y: "-=10rem",
          opacity: 0,
          duration: 2,
          delay: 1.5 * index,
          ease: "sine.out"
        }, 'sin')
      })

    } else if (window.matchMedia("(min-width: 1331px)").matches) {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: ".type-info-head",
          start: "top top",
          end: "bottom bottom",
          toggleActions: "none reverse play none",
        }
      });

      animList.forEach((item, index) => {
        tl.from(item, {
          y: "-=10rem",
          opacity: 0,
          duration: 2,
          delay: 1.5 * index,
          ease: "sine.out"
        }, 'sin')
      })

      tl.play();
    }
  }

  if (document.querySelector('.type-info-head-img_animated-js_opacity')) {
    const animList = gsap.utils.toArray('.type-info-head-img_animated-js_opacity');

    if (window.matchMedia("(max-width: 1330px)").matches) {
      const tl = gsap.timeline({
        delay: 1,
      });

      animList.forEach((item, index) => {
        tl.from(item, {
          opacity: 0,
          duration: 2,
          ease: "sine.out"
        })
      })

    } else if (window.matchMedia("(min-width: 1331px)").matches) {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: ".type-info-head",
          start: "top top",
          end: "bottom bottom",
          toggleActions: "none reverse play none",
        }
      });

      animList.forEach((item, index) => {
        tl.from(item, {
          opacity: 0,
          duration: 2,
          ease: "sine.out"
        })
      })

      tl.play();
    }
  }
  //<==

  // FORMS SEND
  const formSubmitBtns = gsap.utils.toArray("[data-form-send]");

  if (formSubmitBtns.length > 0) {
    const activeSend = (e) => {
      e.preventDefault()
      const send = e.target.parentElement.querySelector(".form-send");
      send.classList.add("_active");
    }

    formSubmitBtns.forEach(btn => {
      btn.addEventListener("click", (e) => activeSend(e))
    })
  }

  const formLabels = gsap.utils.toArray(".form__label");
  if (formLabels.length > 0) {
    formLabels.forEach(label => {
      const checkbox = label.querySelector(".form__checkbox");
      label.addEventListener("click", () => {
        if (checkbox.checked) {
          label.classList.add("_checked");
        } else {
          label.classList.remove("_checked");
        }
      })
    })
  }
  //<==

  // MODAL FROM
  const requestForm = document.querySelector(".modal-request-form");
  const priceForm = document.querySelector(".modal-price-form");

  class ModalForm {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.bg = this.wrapper.querySelector('.modal-form-bg');
      this.btn = this.wrapper.querySelector('.modal-form-btn');
      this.container = this.wrapper.querySelector('.modal-form-container');
      this.send = this.wrapper.querySelector('.form-send');
      this.init();
    }

    init() {
      this.bg.onclick = this.close.bind(this);
      this.btn.onclick = this.close.bind(this);
    }

    close() {
      this.wrapper.classList.remove("_active");
      this.send.classList.remove("_active");
    }

    open() {
      this.wrapper.classList.add("_active");
    }
  }

  if (priceForm) {
    const modalPriceForm = new ModalForm(priceForm);
    const priceOpenBtns = gsap.utils.toArray("[data-open-price]");

    priceOpenBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        modalPriceForm.open();
      })
    })
  }

  if (requestForm) {
    const modalRequestForm = new ModalForm(requestForm);
    const priceOpenBtns = gsap.utils.toArray("[data-open-request]");

    priceOpenBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        modalRequestForm.open();
      })
    })
  }
  //<=
})