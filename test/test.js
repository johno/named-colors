var assert = require('assert')
var rework = require('rework')
var colors = require('../lib/colors')
var bgColors = require('../lib/background-colors')
var borderColors = require('../lib/border-colors')
var strokeColors = require('../lib/stroke-colors')
var fillColors = require('../lib/fill-colors')

describe('colors', function() {

  it('should add the correct rules', function() {
    assert.ok(/\.tomato/.test(rework('').use(colors()).toString()))
  })
})

describe('border-colors', function() {

  it('should add the correct rules', function() {
    assert.ok(/\.border--tomato/.test(rework('').use(borderColors()).toString()))
  })
})

describe('background-colors', function() {

  it('should add the correct rules', function() {
    assert.ok(/\.bg-tomato/.test(rework('').use(bgColors()).toString()))
  })
})

describe('stroke-colors', function() {

  it('should add the correct rules', function() {
    assert.ok(/\.stroke-tomato/.test(rework('').use(strokeColors()).toString()))
  })
})

describe('fill-colors', function() {

  it('should add the correct rules', function() {
    assert.ok(/\.fill-tomato/.test(rework('').use(fillColors()).toString()))
  })
})
