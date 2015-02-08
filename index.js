'use strict'

var fs = require('fs')
var rework = require('rework')
var colorList = require('css-color-list')()

module.exports = function namedColors() {
  fs.writeFileSync('css/colors.css', rework('').use(colorClasses()).toString())
  fs.writeFileSync('css/background-colors.css', rework('').use(bgColorClasses()).toString())
  fs.writeFileSync('css/border-colors.css', rework('').use(borderColorClasses()).toString())
  fs.writeFileSync('css/fill-colors.css', rework('').use(fillColorClasses()).toString())
  fs.writeFileSync('css/stroke-colors.css', rework('').use(strokeColorClasses()).toString())
}

function colorClasses() {
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

function bgColorClasses() {
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

function borderColorClasses() {
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

function fillColorClasses() {
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

function strokeColorClasses() {
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
