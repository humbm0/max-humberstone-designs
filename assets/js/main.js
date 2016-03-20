$(document).ready(function() {
	"use strict";

	// new WOW().init();

  $(window).scroll(function(e){
    parallax();
  });

  function parallax(){
    var scrolled = $(window).scrollTop();
    $('#hero').css('top',-(scrolled*0.0315)+'rem');
    // $('#hero > text').css('top',-(scrolled*-0.005)+'rem');
    $('#hero').css('opacity',1-(scrolled*0.00175));
  };

	$("#mouse").click(function() {
    $('html,body').animate({
        scrollTop: $("#main").offset().top},
        'slow');
	});


	$(".hamburger-slim").hover(function(){
    $(".wrapper").addClass("slide-in-left");
		$(".shadow").addClass("fade-in");
	});

	$(".wrapper").mouseleave(function(){
    $(".wrapper").removeClass("slide-in-left");
		$(".shadow").removeClass("fade-in");
	});

  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

});
