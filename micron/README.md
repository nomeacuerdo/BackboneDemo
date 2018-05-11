# micron
Ultra-ULTRA-lightweight css grid framework based on flexbox (with lightweight documentation!).

## Main features
* Uses Flexbox
* Just 7kb compiled and minified
* Responsive grid
* Visibility features (hide/show on certain breakpoints)

## Usage
If you have no idea what's a SASS and just want the grid system without any weird colors, go to `dist/` and grab the `style.min.css` file.

## Compiling
Go to `src/` and run `sass micron.scss ../dist/style.min.css -s compressed`.

Of course, for this you should have installed before sass with `npm i -g sass`

## Customization
For customization you can:
* Add colors, backgrounds, margins and such on `_theme.scss`.
* Change the breakpoints, number of columns, gutters, container size and font sizes at your will on `_variables.scss`

## Examples
Clone the repo and open `index.html` for examples and features.

## Questions or issues

Go ahead and write an [issue](https://github.com/nomeacuerdo/micron/issues) on github.