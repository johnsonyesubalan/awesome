$(document).ready(function() {


    if ($(window).width() > 1024) { 
        new WOW().init();
    }

    // header scroll function
    var $header = $('header');
    var $headerOffsetTop = $header.data('offset-top');
    var $headerStuck = $header.data('stuck');

    if ($(window).width() > 1024) {  

        $(window).on('scroll', function(){
            if($(window).scrollTop() > $headerOffsetTop ){
              $header.addClass('small-header');
            } else {
              $header.removeClass('small-header');
            }
            if($(window).scrollTop() > $headerStuck ){
              $header.addClass('stuck');
            } else {
              $header.removeClass('stuck');
            }
        });

    }

    // Nice scroll for the page

    if ($(window).width() > 1024) {  

        // nice scroll
        $("html").niceScroll({
            cursorcolor: 'darkcyan',
            cursorwidth:"6px",
            cursorborder:"1px solid darkcyan",
            cursoropacitymax:.9,
            scrollspeed:120,
            autohidemode:false,
            horizrailenabled:false,
            cursorborderradius:2,
            zindex:1
        });

        $(".modal").niceScroll({
            cursorcolor: 'darkcyan',
            cursorwidth:"6px",
            cursorborder:"1px solid darkcyan",
            cursoropacitymax:.9,
            scrollspeed:120,
            autohidemode:false,
            horizrailenabled:false,
            cursorborderradius:2,
            zindex:1
        });

    }


    if ($(window).width() > 767) {  
            
        var bannerHeight = $(window).height() - $('header').height();

        $('#banner .content').css({
            'height': bannerHeight
        });

    }

    // Carousel testimonial
    $('.carousel').carousel({
        interval: 15000,
        pause: 'hover'
    });


    // client slider
    jQuery(document).ready(function() {
    var owl = jQuery(".owl-slider");
        owl.owlCarousel({
            items : 6,
            autoPlay : 5000,
            itemsDesktop : [1000,5], //5 items between 1000px and 901px
            itemsDesktopSmall : [900,4], // betweem 900px and 601px
            itemsTablet: [600,3], //2 items between 600 and 0
            itemsMobile : [300,2] //2 itemsMobile disabled - inherit from itemsTablet option
        });
    });

    $('#client_1').mouseenter(function() {$(this).attr("src","assets/img/clients/hp.png");});
    $('#client_1').mouseleave(function() {$(this).attr("src","assets/img/clients/hp_grey.png");});
    $('#client_2').mouseenter(function() {$(this).attr("src","assets/img/clients/aztec.png");});
    $('#client_2').mouseleave(function() {$(this).attr("src","assets/img/clients/aztec_grey.png");});
    $('#client_3').mouseenter(function() {$(this).attr("src","assets/img/clients/cisco.png");});
    $('#client_3').mouseleave(function() {$(this).attr("src","assets/img/clients/cisco_grey.png");});
    $('#client_4').mouseenter(function() {$(this).attr("src","assets/img/clients/cocacola.png");});
    $('#client_4').mouseleave(function() {$(this).attr("src","assets/img/clients/cocacola_grey.png");});
    $('#client_5').mouseenter(function() {$(this).attr("src","assets/img/clients/shell.png");});
    $('#client_5').mouseleave(function() {$(this).attr("src","assets/img/clients/shell_grey.png");});
    $('#client_6').mouseenter(function() {$(this).attr("src","assets/img/clients/spinworkx.png");});
    $('#client_6').mouseleave(function() {$(this).attr("src","assets/img/clients/spinworkx_grey.png");});
    $('#client_7').mouseenter(function() {$(this).attr("src","assets/img/clients/vodafone.png");});
    $('#client_7').mouseleave(function() {$(this).attr("src","assets/img/clients/vodafone_grey.png");});
    $('#client_8').mouseenter(function() {$(this).attr("src","assets/img/clients/walmart.png");});
    $('#client_8').mouseleave(function() {$(this).attr("src","assets/img/clients/walmart_grey.png");});
    $('#client_10').mouseenter(function() {$(this).attr("src","assets/img/clients/hp.png");});
    $('#client_10').mouseleave(function() {$(this).attr("src","assets/img/clients/hp_grey.png");});
    $('#client_11').mouseenter(function() {$(this).attr("src","assets/img/clients/aztec.png");});
    $('#client_11').mouseleave(function() {$(this).attr("src","assets/img/clients/aztec_grey.png");});
    $('#client_12').mouseenter(function() {$(this).attr("src","assets/img/clients/cisco.png");});
    $('#client_12').mouseleave(function() {$(this).attr("src","assets/img/clients/cisco_grey.png");});
    $('#client_13').mouseenter(function() {$(this).attr("src","assets/img/clients/cocacola.png");});
    $('#client_13').mouseleave(function() {$(this).attr("src","assets/img/clients/cocacola_grey.png");});
    $('#client_14').mouseenter(function() {$(this).attr("src","assets/img/clients/shell.png");});
    $('#client_14').mouseleave(function() {$(this).attr("src","assets/img/clients/shell_grey.png");});
    $('#client_15').mouseenter(function() {$(this).attr("src","assets/img/clients/spinworkx.png");});
    $('#client_15').mouseleave(function() {$(this).attr("src","assets/img/clients/spinworkx_grey.png");});
    $('#client_16').mouseenter(function() {$(this).attr("src","assets/img/clients/vodafone.png");});
    $('#client_16').mouseleave(function() {$(this).attr("src","assets/img/clients/vodafone_grey.png");});
    $('#client_17').mouseenter(function() {$(this).attr("src","assets/img/clients/walmart.png");});
    $('#client_17').mouseleave(function() {$(this).attr("src","assets/img/clients/walmart_grey.png");});



    $().UItoTop();

    // portfolio filter

    $portfolio = $('.portfolio-items');
    $portfolio.isotope({
        itemSelector : '.portfolio-item',
        layoutMode : 'fitRows'
    });
    $portfolio_selectors = $('.portfolio-filter li');
    $portfolio_selectors.on('click', function(){
        $portfolio_selectors.removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({ filter: selector });
        return false;
    });

    $('.features .col-md-3').hover(function() {
        $(this).addClass('flip');
    }, function() {
        $(this).removeClass('flip');
    });


    // header target

    $('.navbar-nav li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });

});