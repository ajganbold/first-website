/*global $ */

$(document).ready(function() {
    
    smoothScroll(700);
    
    $(".head").fitText(1, { minFontSize: '20px', maxFontSize: '64px' });
    
    
    setInterval(function(){articleTada()}, 4000);
    
});

function articleTada(){
    var randNum = Math.floor(Math.random() * $('.picture-container').length) + 1;
    
    $('.pictures').eq(randNum).addClass('is-emph');
    $('.pictures').siblings().removeClass('is-emph');
}


function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {
        
        var target = $( $(this).attr('href') );
        
        if ( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            },duration);
        }
            });
}


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( $ );



function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}