/* This is the JQuery Plugin for the menu */

$document.ready(function() {
  $('#main-menu').smartmenus();
});

/* This is for the social sharing plugin */

$(document).ready(function ($) {

  $('.rrssb-buttons').rrssb({
    // required:
    title: 'mmmm pizza',
    url: 'http://tinadominguez.com/project_final3_dominguez_cristina/'

    // optional:
    description: 'This amazing site is all about pizza',
    emailBody: 'My favorite kind of pizza is Hawaiian, because pineapples are necessary.'
  });
});