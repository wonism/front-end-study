# Gulp
![](https://github.com/wonism/front-end-study/blob/master/gulp/img/gulp.jpg)

## install
- OS X 기준
```sh
# npm 설치
$ brew install npm

# gulp 설치
$ npm install --save-dev gulp
# 혹은
$ npm install -g gulp

# gulpfile 생성
$ touch gulpfile.js
```

## What is Gulp ?
- Gulp 는 간편한 Java Script 빌드 도구이다.
  - 빌드 과정, 테스트, 배포 등을 자동화하여 명령어로 간단하게 실행할 수 있다.
  - npm package 를 사용할 수 있다.
  - 일반적으로 전처리된 CSS, Java Script 컴파일 및 연결과 최소화 등을
    도와준다.
  - 모듈을 require 로 받아서 여러 태스크를 구성한다.
- Grunt 와 하는 일은 비슷하지만,
  - Grunt 는 JSON 을 기반으로 선언적인 설정을 통해 태스크를 관리한다.
  - Gulp 는 코드로 태스크를 관리한다.
- 빌드 시스템은 단순히 task runners 라고 불리며, 자동화된 태스크들의
  모음이다.

## Sample Code
```js
var gulp = require('gulp');
/***** js *****/
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
/***** css *****/
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
/***** image *****/
var imagemin = require('gulp-imagemin');
/***** etc *****/
var del = require('del');

var paths = {
  scripts: ['js/**/*.coffee', '!external/**/*.coffee'],
  stylesheets: 'css/**/*.scss',
  images: 'img/**/*'
  dist: 'dist/'
};

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist + '/js'));
});

gulp.task('sass', ['clean'], function() {
  return gulp.src(paths.stylesheets)
    .pipe(sass())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dist + 'css'));
});

gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(paths.dist + '/img'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylesheets, ['sass']);
  gulp.watch(paths.images, ['images']);
});

gulp.task('default', ['watch', 'scripts', 'sass', 'images']);
```
__모듈__
- gulp-coffee : coffee script 를 컴파일 해주는 npm plug-in
- gulp-concat : 여러 파일을 이어주는 npm plug-in
- gulp-uglify : Java Script 파일을 uglify 하는 npm plug-in
- gulp-sourcemaps : 변환된 ES5 코드와 원래의 ES2015 코드를 매핑해주는
  Source map 파일을 만들어준다.
- gulp-imagemin : Image 사이즈를 줄여준다.
__task__
- watch : 변화를 감지한다. gulp &minus;w 를 통해 실행한다.
- default : gulp 명령어만을 실행할 때 기본적으로 수행하는 태스크이다.

## Examples

