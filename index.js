'use strict'

var fs = require('fs')
var rework = require('rework')
var colorList = require('css-color-list')()

module.exports = function namedColors() {

}

function getColorClasses() {
  return colorList.map(function(color) {
    return {
      type: 'rule',
      selectors: [color],
      declarations: [{
        type: 'declaration',
        property: 'color',
        value: color
      }]
    }
  })
}

function getBgColorClasses() {
  return colorList.map(function(color) {
    return {
      type: 'rule',
      selectors: ['bg-' + color],
      declarations: [{
        type: 'declaration',
        property: 'background-color',
        value: color
      }]
    }
  })
}

function getBorderColorClasses() {
  return colorList.map(function(color) {
    return {
      type: 'rule',
      selectors: ['border--' + color],
      declarations: [{
        type: 'declaration',
        property: 'border-color',
        value: color
      }]
    }
  })
}

function getFillColorClasses() {
  return colorList.map(function(color) {
    return {
      type: 'rule',
      selectors: ['fill-' + color],
      declarations: [{
        type: 'declaration',
        property: 'fill',
        value: color
      }]
    }
  })
}

function getStrokeColorClasses() {
  return colorList.map(function(color) {
    return {
      type: 'rule',
      selectors: ['stroke-' + color],
      declarations: [{
        type: 'declaration',
        property: 'stroke',
        value: color
      }]
    }
  })
}
