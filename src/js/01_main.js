const heroSwiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".hero__swiper-pagination",
    clickable: true,
  },
});

const reasonFirstSwiper = new Swiper('.reason__swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".reason__swiper-pagination",
    clickable: true,
  },
});

const reasonSecondSwiper = new Swiper('.reason__swiper-small', {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".reason__swiper-small-pagination",
    clickable: true,
  },
});

const feedbackSwiper = new Swiper('.feedback__swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".feedback__swiper-pagintaion",
    clickable: true,
  },
});

class Header {
  constructor(headerSelector) {
    this._header = document.querySelector(headerSelector);
    this._menu = this._header.querySelector('.header__bottom');
    this._hamburger = this._header.querySelector('.header__hamburger');
    this._closeBtn = this._header.querySelector('.header__close');
  }

  _toggleMenu() {
    this._menu.classList.toggle('header__bottom_opened');
  }

  _closeMenu() {
    this._menu.classList.remove('header__bottom_opened');
  }

  setEventListeners() {
    this._hamburger.addEventListener('click', () => {
      this._toggleMenu();
    });

    this._closeBtn.addEventListener('click', () => {
      this._closeMenu();
    });
  }
}

// const header = new Header('.header');
// header.setEventListeners();
