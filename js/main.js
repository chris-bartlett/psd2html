$(document).ready(function() {

  //navigation
  $('.burger-nav').on('click', function() {
    $('.container nav ul').toggleClass('open');
  });



  //
  //ANIMATIONS
  //

  //initialise wow js
  new WOW().init();

  //slide the iphone up and chabe opacity through css animated class
  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated slideInUp');
  }, {
    offset: '70%'
  });


  //fade the phone screen on
  $('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeIn');
  }, {
    offset: '70%'
  });


  //push the phone button
  $('.iphone-btn').delay(2300).animate( { bottom: "+=-3"}, 300);
  //release the phone button
  $('.iphone-btn').delay(300).animate( { top: "+=-3"}, 300);
});

