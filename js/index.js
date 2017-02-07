"use strict";

$(document).ready(function () {
  $('#main').fadeIn(1500);
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById('bars').style.visibility = "hidden";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById('bars').style.visibility = "visible";
}

var contentStart = $("#about").offset().top;

var $w = $(window).scroll(function () {
  if ($w.scrollTop() > contentStart) {
    $('#bars').css({
      "border": "5px solid black",
      "color": "black",
      "background": "white"
    });
  } else {
    $('#bars').css({
      "border": "5px solid white",
      "color": "white",
      "background": "none"
    });
  }
});

$(window).scroll(function () {

  $('.toFadeIn').each(function (i) {

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_object) {

      $(this).animate({ 'opacity': '1' }, 500);
    }
  });
});