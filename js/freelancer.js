/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// HTML5 Video Controllers

// Modal 1 control
    $('#pmw1').click(function(){
        document.getElementById('bcc_vid').play();
    });
    
    $('#closeModal1').click(function(){
        document.getElementById('bcc_vid').load();
    })
// Modal 2 control
    $('#pmw2').click(function(){
    document.getElementById('timezone_vid').play();
    });

    $('#closeModal2').click(function(){
        document.getElementById('timezone_vid').load();
    });
// Modal 3 control
    $('#pmw3').click(function(){
    document.getElementById('readingbox_vid').play();
    });
    
    $('#closeModal3').click(function(){
        document.getElementById('readingbox_vid').load();
    });
// Modal 4 control
    $('#pmw4').click(function(){
    document.getElementById('reddit2pdf_vid').play();
    });
    
    $('#closeModal4').click(function(){
        document.getElementById('reddit2pdf_vid').load();
    });