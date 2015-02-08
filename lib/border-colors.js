var colorList = require('css-color-list')()

module.exports = function borderColorClasses() {
  return function(css) {
    var borderColorClasses = colorList.map(function(color) {
      return {
        type: 'rule',
        selectors: ['.border--' + color],
        declarations: [{
          type: 'declaration',
          property: 'border-color',
          value: color
        }]
      }
    })

    css.rules = css.rules.concat(borderColorClasses)
  }
}
