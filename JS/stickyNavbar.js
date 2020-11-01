var h = window.innerHeight;
console.log(h);
$(document).ready(function() {
  $('.navbar').removeClass('fixed-top');
});
$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > h) {
    $('.navbar').addClass('fixed-top');
  }
  if ($(window).scrollTop() <= h) {
    $('.navbar').removeClass('fixed-top');
  }
});
