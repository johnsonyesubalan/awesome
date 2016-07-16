// Wow Animation Initiation
if ($('.wow').length) {

    if ($(window).width() > 1024) {
        new WOW().init();
    }
}

// Header Menu Dropdown toggle
(function($) {
    $(document).ready(function() {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });
})(jQuery);

$(document).ready(function() {

    // header scroll function
    var $header = $('header');
    var $headerOffsetTop = $header.data('offset-top');
    var $headerStuck = $header.data('stuck');

    if ($(window).width() > 1024) {

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > $headerOffsetTop) {
                $header.addClass('small-header');
            } else {
                $header.removeClass('small-header');
            }
            if ($(window).scrollTop() > $headerStuck) {
                $header.addClass('stuck');
            } else {
                $header.removeClass('stuck');
            }
        });

    }

    // Shop slider height
    if ($('.shop-slider').length) {
        if ($(window).width() > 1024) {
            $('.shop-slider').css({
                'height': $(window).height() - $('header').height() - 55
            });
        }
    }
    // features rollover class
    $('.features .col-md-2').hover(function() {
        $(this).addClass('flip');
    }, function() {
        $(this).removeClass('flip');
    });

    $('.features .col-md-3').hover(function() {
        $(this).addClass('flip');
    }, function() {
        $(this).removeClass('flip');
    });

    if ($(window).width() > 768) {

        // languare dropdown width
        var languageWidth = $('.language-width').width();
        $('.language-widthfix').css({
            'width': languageWidth + 5
        });

        // search bar width
        var searchWidth = $('.topbar .pull-right').width();
        $('.topbar .pull-right .search').css({
            'width': searchWidth
        });

    }


    // Carousel testimonial
    $('.carousel').carousel({
        interval: 15000,
        pause: 'hover'
    });


    // client slider
    jQuery(document).ready(function() {

        if ($('.owl-slider').length || $('.our-recent-works').length) {

            var owl = jQuery(".owl-slider");
            var recentWorks = jQuery(".our-recent-works");
            owl.owlCarousel({
                items: 6,
                autoPlay: 5000,
                itemsDesktop: [1000, 5], //5 items between 1000px and 901px
                itemsDesktopSmall: [900, 4], // betweem 900px and 601px
                itemsTablet: [600, 3], //2 items between 600 and 0
                itemsMobile: [300, 2] //2 itemsMobile disabled - inherit from itemsTablet option
            });

            recentWorks.owlCarousel({
                items: 4,
                autoPlay: 5000,
                itemsDesktop: [1000, 4], //5 items between 1000px and 901px
                itemsDesktopSmall: [900, 3], // betweem 900px and 601px
                itemsTablet: [600, 2], //2 items between 600 and 0
                itemsMobile: [300, 2] //2 itemsMobile disabled - inherit from itemsTablet option
            });
        }
    });

    // Client Images Rollover

    $('#client_1').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/hp.png");
    });
    $('#client_1').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/hp_grey.png");
    });
    $('#client_2').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/aztec.png");
    });
    $('#client_2').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/aztec_grey.png");
    });
    $('#client_3').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/cisco.png");
    });
    $('#client_3').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/cisco_grey.png");
    });
    $('#client_4').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/cocacola.png");
    });
    $('#client_4').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/cocacola_grey.png");
    });
    $('#client_5').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/shell.png");
    });
    $('#client_5').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/shell_grey.png");
    });
    $('#client_6').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/spinworkx.png");
    });
    $('#client_6').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/spinworkx_grey.png");
    });
    $('#client_7').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/vodafone.png");
    });
    $('#client_7').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/vodafone_grey.png");
    });
    $('#client_8').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/walmart.png");
    });
    $('#client_8').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/walmart_grey.png");
    });
    $('#client_10').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/hp.png");
    });
    $('#client_10').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/hp_grey.png");
    });
    $('#client_11').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/aztec.png");
    });
    $('#client_11').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/aztec_grey.png");
    });
    $('#client_12').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/cisco.png");
    });
    $('#client_12').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/cisco_grey.png");
    });
    $('#client_13').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/cocacola.png");
    });
    $('#client_13').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/cocacola_grey.png");
    });
    $('#client_14').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/shell.png");
    });
    $('#client_14').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/shell_grey.png");
    });
    $('#client_15').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/spinworkx.png");
    });
    $('#client_15').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/spinworkx_grey.png");
    });
    $('#client_16').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/vodafone.png");
    });
    $('#client_16').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/vodafone_grey.png");
    });
    $('#client_17').mouseenter(function() {
        $(this).attr("src", "assets/img/clients/walmart.png");
    });
    $('#client_17').mouseleave(function() {
        $(this).attr("src", "assets/img/clients/walmart_grey.png");
    });

    // Slidebar
    if ($('#sb-site').length) {
        $.slidebars();
        // toTop button Initiation
        $().UItoTop();
    }

    // portfolio filter
    if ($('.portfolio-items').length) {
        $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        $portfolio_selectors = $('.portfolio-filter li');
        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    }

    // Blog Slider
    if ($('.blog-slider').length) {
        $('.blog-slider').flexslider({
            animation: "slide"
        });
    }

    // Shop thumbnail animation
    if ($('.shop .thumbnails').length) {
        $('.thumbnails .col-xs-4:first-child').addClass('active');
        $(".thumbnails .col-xs-4").click(function() {
            $(this).siblings().removeClass('active');
            $(this).addClass("active");
            var imgsrc = $(this).find('img').attr('src');
            $('.shop .thumbnail img').attr('src', imgsrc).velocity("transition.expandIn", {
                stagger: 1
            })
        });
    }

});