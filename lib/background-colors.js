var colorList = require('css-color-list')()

module.exports = function backgroundColorClasses() {
  return function(css) {
    var bgColorClasses = colorList.map(function(color) {
      return {
        type: 'rule',
        selectors: ['.bg-' + color],
        declarations: [{
          type: 'declaration',
          property: 'background-color',
          value: color
        }]
      }
    })

    css.rules = css.rules.concat(bgColorClasses)
  }
}
