$(document).ready(function() {


  //HERO SLIDE IN ICONS
  var burger = $('.menu');
  TweenMax.from(burger, 0.75, {ease: Sine.easeOut, x:-90, delay: 1.5});

  var mouse = $('.scroll-down');
  TweenMax.from(mouse, 0.75, {ease: Sine.easeOut, bottom:'-10%', delay: 1.5});



  //MENU SLIDE IN
  var nav = $('.wrapper');
  var shadow = $('.shadow');
  var topBar = $('.menu-top');
  var middleBar = $('.menu-middle');
  var bottomBar = $('.menu-bottom');

  var navAnimation = new TimelineLite({paused:true, reversed:true});
  navAnimation.to( nav , 0.1  ,{ease: Sine.easeOut, left:'0'})
    .set(shadow,{ visibility: 'visible'}, 0)
    .to( shadow , 0.5, {ease: Sine.easeOut, opacity: 0.6}, 0)
    .to(topBar, 0, {ease: Sine.easeOut, transform: 'rotate(50deg)', top: 10}, 0)
    .to(middleBar, 0, { opacity: 0}, 0)
    .to(bottomBar, 0, {ease: Sine.easeOut, transform: 'rotate(-410deg)', top:10}, 0);


  // $('.hamburger-slim').click( function(){  navOpen.play()  }) ;

  $(".menu").click (function() {

  // This would work if it wasn't paused
  //tl.reversed(!tl.reversed());

  // Calling play() removes the pause
  navAnimation.reversed() ? navAnimation.play() : navAnimation.reverse();
})

});
