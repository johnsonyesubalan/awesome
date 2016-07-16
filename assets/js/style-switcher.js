// Style Switching Functionality
$(document).on('click', '.customize-gear', function() {
    $('#customize').addClass('view');
});

$(document).on('click', '.customize-close', function(e) {
    e.preventDefault();
    $('#customize').removeClass('view');
});

var colorLink = $("link[href|='assets/css/style']");
var logoImg = $("img[src$='logo1.png']");
var widthClass = $('#wrapper');
var bgImage = $('body');
var color;
var colorValue;



function enableniceScroll(color) {

    if ($(window).width() > 1024) {

        // nice scroll
        $("html").niceScroll({
            cursorcolor: color,
            cursorwidth: "6px",
            cursorborder: "1px solid " + color + "",
            cursoropacitymax: .9,
            scrollspeed: 120,
            autohidemode: false,
            horizrailenabled: false,
            cursorborderradius: 2,
            zindex: 1
        });

    }
}

function checkColor(color) {

    themeColors = {
        blueviolet: "#7373B3",
        brown: "#9c8061",
        cadetblue: "cadetblue",
        darkblue: "#265A8A",
        darkgoldenrod: "#464C4E",
        green: "#779A75",
        darkcyan: "darkcyan",
        darkmagenta: "#8F6A5D",
        darkorange: "#DC8D67",
        dodgerblue: "#4BA3CD",
        limegreen: "#51A66F",
        magenta: "#D772B0",
        maroon: "#EF796C",
        red: "#8F7287",
        yellow: "#B2A06A"
    };

    $.each(themeColors, function(k, v) {
        if (k == color) {
            colorValue = v;
        }
    });

}

function checkLogo(color) {

    themeColors = {
        blueviolet: "logo8",
        brown: "logo12",
        cadetblue: "logo15",
        darkblue: "logo13",
        darkgoldenrod: "logo14",
        green: "logo2",
        darkcyan: "logo1",
        darkmagenta: "logo9",
        darkorange: "logo4",
        dodgerblue: "logo3",
        limegreen: "logo11",
        magenta: "logo7",
        maroon: "logo10",
        red: "logo6",
        yellow: "logo5"
    };

    $.each(themeColors, function(k, v) {
        if (k == color) {
            colorValue = v;
        }
    });

}


if (jQuery.cookie("awesome-color")) {

    if (jQuery.cookie("awesome-color-skin") == 'darkTheme') {
        colorLink.attr("href", "assets/css/" + jQuery.cookie("awesome-color") + "-dark.css");
        $('.dark-theme').prop('checked', true);
    } else {
        colorLink.attr("href", "assets/css/" + jQuery.cookie("awesome-color") + ".css");
    }

    checkColor(jQuery.cookie("awesome-color").substr(jQuery.cookie("awesome-color").indexOf("-") + 1));
    enableniceScroll(colorValue);

    checkLogo(jQuery.cookie("awesome-color").substr(jQuery.cookie("awesome-color").indexOf("-") + 1));
    logoImg.attr('src', 'assets/img/' + colorValue + '.png');
} else {
    color = 'darkcyan';
    enableniceScroll(color);

    if (jQuery.cookie("awesome-color-skin") == 'darkTheme') {
        colorLink.attr("href", "assets/css/style-darkcyan-dark.css");
        $('.dark-theme').prop('checked', true);
    }
}

if (jQuery.cookie("site-width")) {
    widthClass.attr("class", jQuery.cookie("site-width"));

    if (jQuery.cookie("site-width") == 'boxed') {

        $('.layout-boxed').prop('checked', true);

    }
}

if (jQuery.cookie("body-bg")) {

    if (jQuery.cookie("site-width") == 'boxed') {

        bgImage.attr("class", jQuery.cookie("body-bg"));

    }
}


$(document).ready(function() {

    $(".color-box").click(function() {

        if (jQuery.cookie("awesome-color-skin")) {
            colorLink.attr("href", "assets/css/" + $(this).data('rel') + "-dark.css");
            colorLink.attr("href", "assets/css/" + $(this).data('rel') + "-dark.css");
        } else {
            colorLink.attr("href", "assets/css/" + $(this).data('rel') + ".css");
            colorLink.attr("href", "assets/css/" + $(this).data('rel') + ".css");
        }

        jQuery.cookie("awesome-color", $(this).data('rel'), {
            expires: 7,
            path: '/'
        });

        checkLogo(jQuery.cookie("awesome-color").substr(jQuery.cookie("awesome-color").indexOf("-") + 1));

        logoImg.attr('src', 'assets/img/' + colorValue + '.png');

        return false;
    });

    $(".dark-theme").click(function() {
        if ($(this).is(':checked')) {

            setTimeout(function() {

                if (jQuery.cookie("awesome-color")) {
                    colorLink.attr("href", "assets/css/" + jQuery.cookie("awesome-color") + "-dark.css");
                    colorLink.attr("href", "assets/css/" + jQuery.cookie("awesome-color") + "-dark.css");
                } else {
                    colorLink.attr("href", "assets/css/style-darkcyan-dark.css");
                    colorLink.attr("href", "assets/css/style-darkcyan-dark.css");
                }

                jQuery.cookie("awesome-color-skin", 'darkTheme', {
                    expires: 7,
                    path: '/'
                });
                return false;

            }, 200);

        } else {

            setTimeout(function() {

                if (jQuery.cookie("awesome-color")) {
                    colorLink.attr("href", "assets/css/" + jQuery.cookie("awesome-color") + ".css");
                    colorLink.attr("href", "assets/css/" + jQuery.cookie("awesome-color") + ".css");
                } else {
                    colorLink.attr("href", "assets/css/style-darkcyan.css");
                    colorLink.attr("href", "assets/css/style-darkcyan.css");
                }

                jQuery.cookie("awesome-color-skin", 'lightTheme', {
                    expires: 7,
                    path: '/'
                });
                return false;

            }, 200);
        }
    });

    $(".layout-boxed").click(function() {
        if ($(this).is(':checked')) {
            widthClass.attr("class", "boxed");
            $('#toTop').addClass('boxed-button');
            jQuery.cookie("site-width", 'boxed', {
                expires: 7,
                path: '/'
            });
        } else {
            widthClass.attr("class", "");
            $('#toTop').removeClass('boxed-button');
            jQuery.cookie("site-width", 'fluid', {
                expires: 7,
                path: '/'
            });
        }
    });

    $(".pattern").click(function() {
        bgImage.attr("class", $(this).attr("data-bg"));
        jQuery.cookie("body-bg", $(this).attr("data-bg"), {
            expires: 7,
            path: '/'
        });
    });
});