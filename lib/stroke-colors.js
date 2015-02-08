var colorList = require('css-color-list')()

module.exports = function strokeColorClasses() {
  return function(css) {
    var strokeColorClasses = colorList.map(function(color) {
      return {
        type: 'rule',
        selectors: ['.stroke-' + color],
        declarations: [{
          type: 'declaration',
          property: 'stroke',
          value: color
        }]
      }
    })

    css.rules = css.rules.concat(strokeColorClasses)
  }
}
