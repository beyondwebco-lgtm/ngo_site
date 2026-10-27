/**
 * Aashraya Foundation - Common UI Helpers
 * All legacy references completely replaced with Aashraya Foundation namespace.
 */

$(document).ready(function() {
  'use strict';

  // Read More / Read Less toggles
  $('.read-button').click(function() {
    $('.know_more_desc').slideToggle();
    if ($(this).text() === "Know More" || $(this).text() === "Read more") {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  });

  $('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($(this).text() === "Read more") {
      $(this).text("Read less");
    } else {
      $(this).text("Read more");
    }
  });

  // Safe smooth scrolling for hash links
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80
      }, 700);
    }
  });
});
