/**
 * IF "disable-window-scroll", to set the intended header width.
 */

'use strict';

import $ from 'jquery';

export default class BasisFixedHeader {
  constructor() {
    this.container = $('[data-l="container"]');
    this.header    = $('[data-l="header"]');
    this.windowScroll = $('html').attr('data-window-scroll');

    if (this.shouldSetHeaderWidth()) {
      this.setHeaderWidth();

      $(window).on('resize', (event) => {
        this.setHeaderWidth();
      });
    }
  }

  shouldSetHeaderWidth() {
    const position = this.header.css('position');
    if ('fixed' === position && 'false' == this.windowScroll) {
      return true;
    }
    return false;
  }

  setHeaderWidth() {
    const scrollbarWidth = $('body').innerWidth() - this.container[0].clientWidth;
    if (scrollbarWidth > 0) {
      this.header.width('calc(100% - ' + scrollbarWidth + 'px)');
    }
  }
}
