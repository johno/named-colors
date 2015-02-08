var colorList = require('css-color-list')()

module.exports = function fillColorClasses() {
  return function(css) {
    var fillColorClasses = colorList.map(function(color) {
      return {
        type: 'rule',
        selectors: ['.fill-' + color],
        declarations: [{
          type: 'declaration',
          property: 'fill',
          value: color
        }]
      }
    })

    css.rules = css.rules.concat(fillColorClasses)
  }
}
