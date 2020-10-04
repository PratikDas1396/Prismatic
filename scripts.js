$(function() {
    'use strict'

    $(document).on('click', '[data-toggle="offcanvas"]', function() {
        $('.offcanvas-collapse').toggleClass('open')
    })


    $(document).on('click', '[data-toggle="dropdown"]', function(e) {
        debugger;
        $(e.currentTarget).siblings().toggleClass('show')
    })


    // $(document).on('mousein', '.category', function(e) {
    //     debugger;
    //     $(e.currentTarget).toggleClass('show')
    // })



    // $('.carousel').carousel({
    //     interval: 2000
    // })
})

$(document).ready(function() {

    $('.items').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
;
//# sourceMappingURL=scripts.js.map