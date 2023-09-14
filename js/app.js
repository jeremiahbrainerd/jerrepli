$(document).ready(function() {
    // Activate Carousel
    $("#WebSlider").carousel({
        interval: 3000,
        pause: ""
    });
    $("#myCarousel").carousel({
        interval: 5000,
        pause: ""
    });

});


var main = function() {
    /* Push the body and the nav over by 285px over */
    $('.icon-menu').click(function() {
        $('.menu').animate({
            right: "0%"
        }, 200);

    });

    /* Then push them back */
    $('.icon-close').click(function() {
        $('.menu').animate({
            right: "-100%"
        }, 200);

    });
};


$(document).ready(main);