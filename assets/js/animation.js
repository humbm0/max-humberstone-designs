$(document).ready(function() {

  var burger = $('.hamburger-slim');
  TweenMax.from(burger, 0.75, {ease: Sine.easeOut, x:-90, delay: 1.5});

  var mouse = $('.scroll-down');
  TweenMax.from(mouse, 0.75, {ease: Sine.easeOut, bottom:'-10%', delay: 1.5});
});
