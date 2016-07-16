$(document).ready(function() {

    // Vimeo API nonsense
    var player = document.getElementById('player_1');
    $f(player).addEvent('ready', ready);

    function addEvent(element, eventName, callback) {
        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false)
        } else {
            element.attachEvent(eventName, callback, false);
        }
    }

    function ready(player_id) {
        var froogaloop = $f(player_id);
        froogaloop.addEvent('play', function(data) {
            $('.flexslider').flexslider("pause");
        });
        froogaloop.addEvent('pause', function(data) {
            $('.flexslider').flexslider("play");
        });
    }
    // Slider animation
    if ($(window).width() > 1024) {
        $('.intro-slider .slides li.second h1:first').hide();
        $('.intro-slider .slides li.second h1.alt').hide();
        $('.intro-slider .slides li.second img:first').hide();
        $('.intro-slider .slides li.second img.macbook').hide();
        $('.intro-slider .slides li.second img.ipad').hide();
        $('.content-slider .slides li h1.hide1').hide();
    }
    // Flexslider
    $('.flexslider').flexslider({
        animation: "slide",
        animationSpeed: 1300,
        slideshowSpeed: 7000,
        before: function(slider) {
            $f(player).api('pause');

            if ($(window).width() > 1024) {
                $(slider).find(".currentSlide").each(function() {
                    $(this).removeClass("currentSlide");
                });
                // Animating Slider Content
                $('.intro-slider .slides li.front h1').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.front img').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.front p').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.front a').removeClass('fadeInUp').addClass('fadeOutUp');

                $('.intro-slider .slides li.third h1').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.third .embed-responsive').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.third p').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.third a').removeClass('fadeInUp').addClass('fadeOutUp');


                $('.intro-slider .slides li.second h1:first').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.second h1.alt').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.second img:first').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.second img.macbook').removeClass('fadeInUp').addClass('fadeOutUp');
                $('.intro-slider .slides li.second img.ipad').removeClass('fadeInUp').addClass('fadeOutUp');


                $('.content-slider .slides li h1').removeClass('fadeInUp').addClass('fadeOutUp');
            }
        },
        after: function(slider) {

            if ($(window).width() > 1024) {
                // Animating Slider Content
                $('.intro-slider .slides li.second h1:first').show();
                $('.intro-slider .slides li.second h1.alt').show();
                $('.intro-slider .slides li.second img:first').show();
                $('.intro-slider .slides li.second img.macbook').show();
                $('.intro-slider .slides li.second img.ipad').show();

                $('.content-slider .slides li h1.hide1').show();

                $(slider).find(".flex-active-slide").prev().addClass("currentSlide");

                $('.intro-slider .slides li.currentSlide.front h1').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.front img').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.front p').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.front a').removeClass('fadeOutUp').addClass('fadeInUp');

                $('.intro-slider .slides li.currentSlide.third h1').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.third .embed-responsive').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.third p').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.third a').removeClass('fadeOutUp').addClass('fadeInUp');


                $('.intro-slider .slides li.currentSlide.second h1:first').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.second h1.alt').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.second img:first').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.second img.macbook').removeClass('fadeOutUp').addClass('fadeInUp');
                $('.intro-slider .slides li.currentSlide.second img.ipad').removeClass('fadeOutUp').addClass('fadeInUp');

                $('.content-slider .slides li.currentSlide h1').removeClass('fadeOutUp').addClass('fadeInUp');
            }
        }

    });
    // Animating Slider Content
    if ($(window).width() > 1024) {
        $('.intro-slider .slides li.front h1').addClass('fadeInUp');
        $('.intro-slider .slides li.front img').addClass('fadeInUp');
        $('.intro-slider .slides li.front p').addClass('fadeInUp');
        $('.intro-slider .slides li.front a').addClass('fadeInUp');
        $('.content-slider .slides li h1').addClass('fadeInUp');


        var sliderHeight = $(window).height() - $('header').height() - 55;
        $('.fluid-height .flex-viewport').css({
            'height': sliderHeight
        });
        $('.fluid-height .slider-content').css({
            'height': sliderHeight
        });
    }
});