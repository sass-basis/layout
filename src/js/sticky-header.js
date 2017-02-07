/**
 * This is for the sticky header.
 */

'use strict';

import $ from 'jquery';

export default class BasisStickyHeader {
  constructor() {
    this.container = $('[data-l="container"]');
    this.header    = $('[data-l="header"]');
    this.contents  = $('[data-l="contents"]');
    this.windowScroll = $('html').attr('data-window-scroll');

    this.setScroll();
    this.setSticky();
    this.setListener();
  }

  setListener() {
    const target = this.getScrollTarget();

    target.on('scroll resize', (event) => {
      this.setScroll();
      this.setSticky();
    });
  }

  setScroll() {
    const scroll = this.getScrollTop();

    if (scroll > 0) {
      $('html').attr('data-scrolled', 'true');
    } else {
      $('html').attr('data-scrolled', 'false');
    }
  }

  setSticky() {
    if ('sticky' !== this.header.attr('data-l-header-type')) {
      return;
    }

    const scroll = this.getScrollTop();
    if (scroll > 0) {
      const headerHeight = this.header.outerHeight();
      this.contents.css('paddingTop', `${headerHeight}px`);
    } else {
      this.contents.css('paddingTop', '');
    }
  }

  getScrollTarget() {
    if ('false' == this.windowScroll) {
      return this.container;
    } else {
      return $(window);
    }
  }

  getScrollTop() {
    return this.getScrollTarget().scrollTop();
  }
}
