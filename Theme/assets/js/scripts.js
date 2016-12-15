$(document).ready(function () {

    /*============================================
    Page Preloader
    ==============================================*/

    $(window).load(function () {
        $('#page-loader').fadeOut(500, function () {
            loadGmap();
        });

    })

    /*============================================
    Header
    ==============================================*/

    $('#home').height($(window).height() + 50);

    $.backstretch('assets/images/header-bg.jpg');

    $(window).scroll(function () {
        var st = $(this).scrollTop(),
            wh = $(window).height(),
            sf = 1 + st / (10 * wh);

        $('.backstretch img').css({
            'transform': 'scale(' + sf + ')',
            '-webkit-transform': 'scale(' + sf + ')'
        });

        $('#home .container').css({
            'opacity': (1.6 - st / 400)
        });

        if ($(window).scrollTop() > ($(window).height() + 50)) {
            $('.backstretch').hide();
        } else {
            $('.backstretch').show();
        }

    });

    var st = $(this).scrollTop(),
        wh = $(window).height(),
        sf = 1 + st / (10 * wh);

    $('.backstretch img').css({
        'transform': 'scale(' + sf + ')',
        '-webkit-transform': 'scale(' + sf + ')'
    });

    $('#home .container').css({
        'opacity': (1.6 - st / 400)
    });


    /*============================================
    Navigation Bar
    ==============================================*/
    if ($(window).scrollTop() < ($(window).height() - 35)) {
        $('#main-nav').removeClass('scrolled');
    } else {
        $('#main-nav').addClass('scrolled');
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() < ($(window).height() - 35)) {
            $('#main-nav').removeClass('scrolled');
        } else {
            $('#main-nav').addClass('scrolled');
        }
    });

    /*============================================
    Navigation Links
    ==============================================*/
    $("#main-nav a").click(function () {
        element = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(element).offset().top - 30
        }, 1000);
        if ($('#site-nav').is(":visible") && $(window).width() < 769) {
            $('.navbar-toggle').trigger('click');
        }
        return false;
    });

    /*============================================
	About Picture
	==============================================*/
    var controller;
    $(document).ready(function ($) {
        if ($(window).width() > 769) {
            // init controller
            controller = new ScrollMagic();
            // build scene
            var timelineheight = $('.timeline').outerHeight(true) - 600;
            var scene = new ScrollScene({
                    triggerElement: "#trigger1",
                    duration: timelineheight,
                    offset: 200
                })
                .setPin("#pin1")
                .addTo(controller);
        }
    });

    /*============================================
    Skills
    ==============================================*/
    var colorval = $('.hello h1').css('backgroundColor');
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    function elementInViewport(el) {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    var distance = $('.chart').offset().top - $(window).height() + 100,
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance) {
            $('.chart').easyPieChart({
                animate: 2000,
                scaleColor: false,
                trackColor: '#fff',
                barColor: color,
                lineWidth: 14,
                size: 175,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });




    /*============================================
    Project thumbs
    ==============================================*/
    $(window).load(function () {

        $('#projects-container').css({
            visibility: 'visible'
        });

        $('#projects-container').masonry({
            itemSelector: '.project-item:not(.filtered)',
            columnWidth: 350,
            isFitWidth: true,
            isResizable: true,
            isAnimated: !Modernizr.csstransitions,
            gutterWidth: 25
        });

    });

    /*============================================
    Filter Projects
    ==============================================*/
    $('#filter-works a').click(function (e) {
        e.preventDefault();

        $('#filter-works li').removeClass('active');
        $(this).parent('li').addClass('active');

        var category = $(this).attr('data-filter');

        $('.project-item').each(function () {
            if ($(this).is(category)) {
                $(this).removeClass('filtered');
            } else {
                $(this).addClass('filtered');
            }

            $('#projects-container').masonry('reload');
        });

    });

    
    


    $("#test").on("click", function () {
        $("#contact-modal").modal('show');
    });

    $('.chevron').on('click', function () {

        if ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0)
            $(this).addClass('fa-chevron-down')
            $(this).removeClass('fa-chevron-up')
        } else {
            $(this).attr('data-click-state', 1)
            $(this).addClass('fa-chevron-up')
            $(this).removeClass('fa-chevron-down')
        }

    });

    //    $(".fa-chevron-down").on("click", function () {
    //        $(this).removeClass('fa-chevron-down');
    //        $(this).addClass('fa-chevron-right');
    //
    //    });
    //    
    //    $(".fa-chevron-right").on("click", function () {
    //        $(this).removeClass('fa-chevron-right');
    //        $(this).addClass('fa-chevron-down');
    //
    //    });


    $("#question2").hide();
    $("#question3").hide();
    //    $( "#question4" ).hide();
    $(".question").css("opacity", "0.3");
    $(".fa-briefcase").css("opacity", "0.3");
    $(".question2").css("opacity", "0.3");
    $(".fa-heart").css("opacity", "0.3");
    $(".question3").css("opacity", "0.3");
    $(".fa-thumbs-up").css("opacity", "0.3");
    $(".question4").css("opacity", "0.3");

    $("#filter-works").hide();
    $("#filter-works").css("opacity", "0.4 !important");





    $("#bouton-quiz").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top + 70
        }, 1200);

    });








    $("#face-result").click(function () {
        $("#face-result").html("<i class='fa fa-spinner fa-pulse fa-3x fa-fw'></i>");
        setTimeout(activeModale, 2000);

    });

    function activeModale() {
        $("#face-result").html("Résultat");
        $('#contact-modal').modal('show');
    }






    $("#contact-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top + 70
        }, 1200);


    });





    $("#good1").click(function () {
        $("#good1").css("background-color", "limegreen");
        $("#question2").show();
        $(".question2").css("opacity", "1");
        $(".fa-briefcase").css("opacity", "1");
        $(".fa-briefcase").addClass("swing");
        $('html, body').animate({
            scrollTop: $("#question2").offset().top - 300
        }, 1200);


    });

    //    $( ".pas-scroll" ).click(function() {
    //        $('html, body').animate({
    //                    scrollTop: $("#question2").offset().top-6550
    //                }, 1200);
    //    });

    $("#good2").click(function () {
        $("#good2").css("background-color", "limegreen");
        $("#question3").show();
        $(".question3").css("opacity", "1");
        $(".fa-heart").css("opacity", "1");
        $(".fa-heart").addClass("swing");
        $('html, body').animate({
            scrollTop: $("#question3").offset().top - 300
        }, 1200);


    });

    $("#good3").click(function () {
        $("#good3").css("background-color", "limegreen");
        $("#question4").show();
        $(".question4").css("opacity", "1");
        $(".fa-thumbs-up").css("opacity", "1");
        $(".fa-thumbs-up").addClass("swing");
        $("#filter-works").show();
        $('html, body').animate({
            scrollTop: $("#question4").offset().top - 230
        }, 1200);


    });

    $("#good4").click(function () {
        $("#good4").css("background-color", "limegreen");
        //        $( "#contact" ).show();
        //        $('html, body').animate({
        //                    scrollTop: $("#contact").offset().top-100
        //                }, 1200);
        //        

    });

    
    
    $("#cell").click(function () {
        window.location.href = "tel:15146548113";
    });
    
    $("#mail").click(function () {
        window.location.href = "mailto:mattqcca@gmail.com";
    });
    
    $("#link").click(function () {
        window.open("https://www.linkedin.com/in/mathieuroymba");
    });
    
    $("#cv").click(function () {
        window.open("assets/images/cv-mathieuroy.pdf");
    });
    
    $("#github").click(function () {
        window.open("https://github.com/mattqcca?tab=repositories");
    });
    
    





});