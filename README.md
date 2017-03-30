# sass-basis-layout
This is a css module for the Basis.

## repository
* https://github.com/sass-basis/layout/

## Basis
* Repository: https://github.com/sass-basis/basis/
* Documents : https://sass-basis.github.io/

## Get Started
### Install
```
$ yarn add sass-basis
$ yarn add sass-basis-layout
```

### Sass
```
@import 'node_modules/sass-basis-layout/src/css/basis';
@import 'node_modules/sass-basis-layout/src/css/layout/container';
```

## Using sticky header

The header fixed to top and the contents is under the header.

### HTML
```
<div class="_l-container" data-l="container">
  <header class="_l-header" data-l="header" data-l-header-type="sticky"></header>
  <div class="_l-contents" data-l="contents"></div>
  <footer class="_l-footer" data-l="footer"></footer>
</div>
```

### JavaScript
```
import BasisStickyHeader from 'node_modules/sass-basis-layout/src/js/sticky-header.js';
new BasisStickyHeader();
```

## Using overlay header

The header fixed to top and overlay the contents.

### HTML
```
<div class="_l-container" data-l="container">
  <header class="_l-header" data-l="header" data-l-header-type="overlay"></header>
  <div class="_l-contents" data-l="contents"></div>
  <footer class="_l-footer" data-l="footer"></footer>
</div>
```

### JavaScript
```
import BasisStickyHeader from 'node_modules/sass-basis-layout/src/js/sticky-header.js';
new BasisStickyHeader();
```

## Using sticky footer

The footer fixed to bottom when the contents is smaller than the height of the window.

### HTML
```
<html data-sticky-footer="true">
  <div class="_l-container" data-l="container">
    <header class="_l-header" data-l="header"></header>
    <div class="_l-contents" data-l="contents"></div>
    <footer class="_l-footer" data-l="footer"></footer>
  </div>
</html>
```

## Using disable window scroll

Scroll the contents of the page instead of scrolling the window.

### HTML
```
<html data-window-scroll="false">
  <div class="_l-container" data-l="container">
    <header class="_l-header" data-l="header"></header>
    <div class="_l-contents" data-l="contents"></div>
    <footer class="_l-footer" data-l="footer"></footer>
  </div>
</html>
```

### JavaScript

When with using sticky or overlay header.

```
import BasisStickyHeader from 'node_modules/sass-basis-layout/src/js/sticky-header.js';
import BasisFixedHeader from 'node_modules/sass-basis-layout/src/js/fixed-header.js';
new BasisStickyHeader();
new BasisFixedHeader();
```

## Browser support
Modern Browser and IE10+

## License
MIT License
