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
      params.header = '._l-header--overlay';
    }
    if (!params.class) {
      params.class = '_l-header--is-scrolled';
    }
    return params;
  }

  setListener() {
    const target = this.getScrollTarget();

    target.addEventListener('scroll', (event) => {
      const scroll = this.getScrollTop();
      if (scroll > 0) {
        this.header.classList.add(this.params.class);
      } else {
        this.header.classList.remove(this.params.class);
      }
    }, false);
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
