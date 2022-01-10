// Add your custom JS here.

// init controller
var controller = new ScrollMagic.Controller();


(function($) {
    $(document).ready(function($) {
        
        // scroll magic
        $('article.card').each(function() {
            var card = $(this);
            var id = card.attr('id');
            
            // build scene
            new ScrollMagic.Scene({
                triggerElement: "#" + id,
                triggerHook: 0.7, // show, when scrolled 10% into view
                offset: 50 // move trigger to center of element
            })
            .setClassToggle("#" + id, "visible") // add class to reveal
            .addTo(controller);
        });

        // bootstrap modal
        setTimeout(function( ) {
            $('#ctaModal').modal('show')
        }, 1800);
    });
}) ( jQuery );