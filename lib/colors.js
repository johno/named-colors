var colorList = require('css-color-list')()

module.exports = function colorClasses() {
  return function(css) {
    var colorClasses = colorList.map(function(color) {
      return {
        type: 'rule',
        selectors: ['.' + color],
        declarations: [{
          type: 'declaration',
          property: 'color',
          value: color
        }]
      }
    })

    css.rules = css.rules.concat(colorClasses)
  }
}
