jQuery('.close-info').click(function(e){
    e.preventDefault();
    jQuery('.top-info').slideUp();
});
if (jQuery('.fly-by').length >= 1) {
    jQuery('.fly-by').slick({
        speed: 1000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        cssEase: 'ease',
        slidesToShow: 1,
        pauseOnHover: true,
        draggable: false,
         touchMove: false,
        centerMode: true,
        centerPadding: '33.333%',
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
//            {
//                breakpoint: 1200,
//                settings: {
//                    slidesToShow: 2,
//                    slidesToScroll: 1
//                }
//            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
if (jQuery('.fly-by-alt').length >= 1) {
    jQuery('.fly-by-alt').slick({
        speed: 1000,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        cssEase: 'ease',
        slidesToShow: 1,
        pauseOnHover: true,
        draggable: false,
        touchMove: false,
        centerMode: true,
        centerPadding: '33.333%',
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
//            {
//                breakpoint: 1200,
//                settings: {
//                    slidesToShow: 2,
//                    slidesToScroll: 1
//                }
//            },
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    jQuery('.custom-slide-next').click(function (e) {
        e.preventDefault();
        jQuery('.fly-by-alt').slick('slickNext');
        jQuery('.fly-by').slick('slickNext');
    });
    jQuery('.custom-slide-prev').click(function (e) {
        e.preventDefault();
        jQuery('.fly-by-alt').slick('slickPrev');
        jQuery('.fly-by').slick('slickPrev');
    });
    jQuery('.fly-by-holder').on('mouseenter', function () {
        jQuery('.fly-by').slick('slickPause');
        jQuery('.fly-by-alt').slick('slickPause');
    });
    jQuery('.fly-by-holder').on('mouseleave', function () {
        jQuery('.fly-by').slick('slickPlay');
        jQuery('.fly-by-alt').slick('slickPlay');
    });
}


