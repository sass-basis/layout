/**
 * This is for the overlay header.
 * If scroll the page, added a class "is-scrolled".
 */

'use strict';

export default class BasisOverlayHeader {
  constructor(container, params) {
    if (!container) {
      container = '._l-container';
    }

    this.params    = this.setParams(params);
    this.container = document.querySelector(container);
    this.header    = document.querySelector(this.params.header);
    this.isDisableWindowScroll = document.getElementsByTagName('html')[0].classList.contains('_disable-window-scroll');

    this.setListener();
  }

  setParams(params) {
    if (!params) {
      params = {};
    }
    if (!params.header) {
      params.header = '._l-header';
    }
    if (!params.class_sticky) {
      params.class_sticky = '_l-header--sticky';
    }
    if (!params.class_overlay) {
      params.class_overlay = '_l-header--overlay';
    }
    if (!params.class_scroll) {
      params.class_scroll = '_l-header--is-scrolled';
    }
    return params;
  }

  setListener() {
    const target = this.getScrollTarget();
    target.addEventListener('scroll', (event) => {
      const scroll = this.getScrollTop();
      this.setClassForScroll(scroll);
      this.setClassForSticky(scroll);
    }, false);
  }

  setClassForScroll(scroll) {
    if (scroll > 0) {
      this.header.classList.add(this.params.class_scroll);
    } else {
      this.header.classList.remove(this.params.class_scroll);
    }
  }

  setClassForSticky(scroll) {
    if (this.header.classList.contains(this.params.class_sticky)) {
      const header_height = this.header.offsetHeight;
      if (scroll > 0) {
        this.header.nextElementSibling.style.paddingTop = header_height + 'px';
        this.header.classList.add(this.params.class_overlay);
      } else {
        this.header.nextElementSibling.style.paddingTop = 0;
        this.header.classList.remove(this.params.class_overlay);
      }
    }
  }

  getScrollTarget() {
    if (this.isDisableWindowScroll) {
      return this.container;
    } else {
      return window;
    }
  }

  getScrollTop() {
    const target = this.getScrollTarget();
    if (this.isDisableWindowScroll) {
      return this.container.scrollTop;
    } else {
      return window.pageYOffset;
    }
  }
}
