/* This is the JQuery Plugin for the menu */

$(function() {
  $('#main-menu').smartmenus();
});

/* This is for the Twitter Plugin on About page */

$(document).ready(function() {
   ("#tweets").tweetSlider({
        hash:"pizzaplanet",
       refreshTime: 50000,
    });
    })
