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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

  },
  grabCursor: true,
  pagination: {
    el: ".feedback__swiper-pagintaion",
    clickable: true,
  },
});

class Header {
  constructor(headerSelector) {
    this._header = document.querySelector(headerSelector);
    this._menu = this._header.querySelector('.header__right');
    this._hamburger = this._header.querySelector('.header__hamburger');
    this._closeBtn = this._header.querySelector('.header__close');
    this._logoTxt = this._header.querySelector('.header__logo-txt');
    this._page = document.querySelector('.page');
  }

  _openMenu() {
    this._menu.classList.add('header__right_opened');
    this._logoTxt.classList.add('header__logo-txt_dark');
    this._page.classList.add('page_blocked');
  }

  _closeMenu() {
    this._menu.classList.remove('header__right_opened');
    this._logoTxt.classList.remove('header__logo-txt_dark');
    this._page.classList.remove('page_blocked');
  }

  setEventListeners() {
    this._hamburger.addEventListener('click', () => {
      this._openMenu();
    });

    this._closeBtn.addEventListener('click', () => {
      this._closeMenu();
    });
  }
}

const header = new Header('.header');
header.setEventListeners();

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeBtn = this._popup.querySelector('.popup__close');
  }

  opendPopup() {
    this._popup.classList.add('popup_opened');
  }

  _closePopup() {
    this._popup.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._closeBtn.addEventListener('click', () => {
      this._closePopup();
    });

    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this._closePopup();
      }
    })
  }
}

const popup = new Popup('.popup');
popup.setEventListeners();

const allPopupBtns = document.querySelectorAll('.popup-btn');
allPopupBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.opendPopup();
  })
});
