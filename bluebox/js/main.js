$(document).ready(function() {

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

});

