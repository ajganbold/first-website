/*global $ */



$(document).ready(function() {
    
    
     $('.menu').click( function(event){
        event.stopPropagation();
        $('.drop-down-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-down-menu').hide();
    });
    
    
    
    
    $('.link1').click(function() {
       var currentTable = $('.active-table');
       currentTable.fadeOut(500).removeClass('active-table');
       $('.table1').fadeIn(600).addClass('active-table');
    });
    
        
   $('.link2').click(function() {
       var currentTable = $('.active-table');
       currentTable.fadeOut(500).removeClass('active-table');
       $('.table2').fadeIn(600).addClass('active-table');
   });
   
   $('.link3').click(function() {
       var currentTable = $('.active-table');
       currentTable.fadeOut(500).removeClass('active-table');
       $('.table3').fadeIn(600).addClass('active-table');
   });
   
   $('.link4').click(function() {
       var currentTable = $('.active-table');
       currentTable.fadeOut(500).removeClass('active-table');
       $('.table4').fadeIn(600).addClass('active-table');
   });
   
   $('.link5').click(function() {
       var currentTable = $('.active-table');
       currentTable.fadeOut(500).removeClass('active-table');
       $('.table5').fadeIn(600).addClass('active-table');
   });
    
    
   $('.next').click( function() {
       var currentTable = $('.active-table');
       var nextTable = currentTable.next();
       
       if(nextTable.length === 0) {
           nextTable = $('.table').first();
       }
       
       currentTable.fadeOut(500).removeClass('active-table');
       nextTable.fadeIn(600).addClass('active-table');
       
   });
   
   $('.prev').click( function() {
       var currentTable = $('.active-table');
       var prevTable = currentTable.prev();
       
       if(prevTable.length === 0) {
           prevTable = $('.table').last();
       }
       
       currentTable.fadeOut(500).removeClass('active-table');
       prevTable.fadeIn(600).addClass('active-table');
       
   });
       
});


    
    
    