/*global $ */

$(document).ready(function() {
    // FOOTER JS
   $(".back-to-article").hide();
        
        $(".ps").mouseenter(function() {
            $(".back-to-article").slideDown(400);
            $(".ps").hide();
        });
        
        
        $(".back-to-article").mouseleave(function() {
            $(".back-to-article").hide();
            $(".ps").slideDown();
        });
        
        
        
        /*$('.start').click( function() {
           var currentPage = $('.current');
           var nextPage = currentPage.next();
           
           var currentLine = $('.active');
           var nextLine = currentLine.next();
           
           if(nextPage.length === 0) {
               nextPage = $('.page').first();
               nextLine = $('.line').first();
       }
       
       currentPage.fadeOut(500).removeClass('current');
       nextPage.fadeIn(600).addClass('current');
       
       currentLine.removeClass('active');
       nextLine.addClass('active');
       
           
        });*/
        
        
        $('.next').click( function() {
           var currentPage = $('.current');
           var nextPage = currentPage.next();
           
           var currentLine = $('.active');
           var nextLine = currentLine.next();
           
           if(nextPage.length === 0) {
               nextPage = $('.page').first();
               nextLine = $('.line').first();
       }
       
       currentPage.slideUp(800).removeClass('current');
       nextPage.slideDown(800).addClass('current');
       
       currentLine.removeClass('active');
       nextLine.addClass('active');
       
        });
        
        
        $('.prev').click( function() {
           var currentPage = $('.current');
           var prevPage = currentPage.prev();
           
           var currentLine = $('.active');
           var prevLine = currentLine.prev();
           
           if(prevPage.length === 0) {
               prevPage = $('.page').last();
               prevLine = $('.line').last();
       }
       
       currentPage.slideUp(800).removeClass('current');
       prevPage.slideDown(800).addClass('current');
       
       currentLine.removeClass('active');
       prevLine.addClass('active');
       
    });
    
});

