'use strict'

var fs = require('fs')
var gulp = require('gulp')
var concat = require('gulp-concat')
var rework = require('rework')

var colors = require('./lib/colors')
var bgColors = require('./lib/background-colors')
var borderColors = require('./lib/border-colors')
var strokeColors = require('./lib/stroke-colors')
var fillColors = require('./lib/fill-colors')

gulp.task('index', ['css'], function() {
  gulp.src('css/*.css')
    .pipe(concat('index.css'))
    .pipe(gulp.dest('./'))
})

gulp.task('css', function() {
  fs.writeFileSync('css/colors.css', rework('').use(colors()).toString())
  fs.writeFileSync('css/background-colors.css', rework('').use(bgColors()).toString())
  fs.writeFileSync('css/border-colors.css', rework('').use(borderColors()).toString())
  fs.writeFileSync('css/stroke-colors.css', rework('').use(strokeColors()).toString())
  fs.writeFileSync('css/fill-colors.css', rework('').use(fillColors()).toString())
})

gulp.task('default', ['css','index'])
