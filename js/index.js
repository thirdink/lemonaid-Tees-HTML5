$(document).ready(function() {

    $('.responsive').slick({
        //dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,

        autoplay:true,
        autoplaySpeed:4000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                //dots: true,
                infinite: true,

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                //dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                //dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
            }
        }]
    });
    $('.responsive1').slick({
        //dots: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        adaptiveHeight: true,
        //variableWidth:true,

        autoplay:true,
        autoplaySpeed:3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                //dots: true,
                infinite: true,

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                //dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                //dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
            }
        }]
    });


});
