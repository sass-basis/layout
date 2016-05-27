/**
 * IF "disable-window-scroll", to set the intended header width.
 */

'use strict';

export default class BasisFixedHeader {
  constructor(container, params) {
    if (!container) {
      container = '._l-container';
    }

    this.params    = this.setParams(params);
    this.container = document.querySelector(container);
    this.header    = document.querySelector(this.params.header);
    this.isDisableWindowScroll = document.getElementsByTagName('html')[0].classList.contains('_disable-window-scroll');

    if (this.shouldSetHeaderWidth()) {
      this.setHeaderWidth();

      window.addEventListener('resize', (event) => {
        this.setHeaderWidth();
      }, false);
    }
  }

  setParams(params) {
    if (!params) {
      params = {};
    }
    if (!params.header) {
      params.header = '._l-header';
    }
    return params;
  }

  shouldSetHeaderWidth() {
    const position = document.defaultView.getComputedStyle(this.header, null).position;
    if (position === 'fixed' && this.isDisableWindowScroll) {
      return true;
    }
    return false;
  }

  setHeaderWidth() {
    const scrollbarWidth = document.body.clientWidth - this.container.clientWidth;
    if (scrollbarWidth > 0) {
      this.header.style.width = 'calc(100% - ' + scrollbarWidth + 'px)';
    }
  }
}
