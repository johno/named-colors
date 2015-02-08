# named-colors [![Build Status](https://secure.travis-ci.org/johnotander/named-colors.png?branch=master)](https://travis-ci.org/johnotander/named-colors)

A CSS module for utility classes for all named CSS colors (bg, color, border, svg, etc).

## Installation

```bash
npm install --save named-colors
```

## Usage

Works great with Rework/PostCSS (it's recommended to also use this with uncss):

```css
@import 'named-colors';
```

The entire CSS stylesheet can be found in the `index.css`. However, within the `css/` directory, there
are stylesheets for individual utilities: `color`, `background-color`, `border`, `fill`, and `stroke`.

This module also exposes, within the `lib/` directory, some rework plugins that can be incorporated into
an existing rework project.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
