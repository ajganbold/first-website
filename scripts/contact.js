/*global $ */



$(document).ready(function() {
    
  
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });
    
    showLinks();
    
});

function showLinks() {
    
      $('.thumbs').each(function(i){
        setTimeout(function() {
          $('.thumbs').eq(i).addClass('visible');
        }, 200 * i);
      });
    }
    

var prev = 0;
var $window = $(window);
var nav = $('.header');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});