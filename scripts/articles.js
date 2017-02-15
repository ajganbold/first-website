/*global $ */

$(document).ready(function() {
    
  
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });
    
  
    setInterval(function(){articleTada();}, 2000);
    
    startArticles();
});

var prev = 0;
var $window = $(window);
var nav = $('.header');

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;
});

function articleTada(){
    var randNum = Math.floor(Math.random() * $('.bg-thumbs').length) + 1;
    
    $('.bg-thumbs').eq(randNum).addClass('is-emph');
    //$('.bg-thumbs').siblings().removeClass('is-emph');
}

function startArticles() {
    $('.bg-thumbs').each(function(i){
      setTimeout(function() {
        $('.bg-thumbs').eq(i).addClass('is-visible');
      }, 100 * i);
    });
  }
  


