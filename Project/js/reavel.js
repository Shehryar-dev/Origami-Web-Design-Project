// =======REvEal Here
window.addEventListener('scroll', reveal);
function reveal(){
var reveals = document.querySelectorAll('.reveal');
for ( var i = 0 ; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if(revealtop < windowHeight - revealpoint){
        reveals[i].classList.add("active");
    }else{
        reveals[i].classList.remove("active");
    }
}
}
// img open in full screen
$('img[data-enlargable]').addClass('img-enlargable').click(function () {
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '100%', height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0', left: '0',
        cursor: 'zoom-out'
    }).click(function () {
        $(this).remove();
    }).appendTo('body');
});
// btn rock on top
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

//  ----nav-animation--
$(function () {
    $(window).on('scroll', function () {
        var nav = $('.scrolling-navbar');
        if ($(window).scrollTop() > 50) {
            nav.css({
                "padding-top": "6px",
                "padding-bottom": "6px"
            });
            nav.addClass('top-nav-collapse');
        }
        else {
            nav.css({
                "padding-top": "14px",
                "padding-bottom": "14px"
            });
            nav.removeClass('top-nav-collapse');
        }
    });
});

//==================== feedback========/
$(document).ready(function () {


    $(".question a").click(function () {
        $(this).toggleClass("active_qa");
    });

    $(".smiley").click(function () {
        $(this).toggleClass("test");
        $(this).siblings().removeClass("test");
    });

});


//    button animation//

$(".button-send").on("click", function () {
    $(this).html('<i class="fa fa-plane"></i>');
    $(this).css('background-color', '#fdb686');
    setTimeout(function () {
        $(".button-send").html('Send');
        $(".button-send").css('background-color', '#40B4DE');
    }, 1500)
});
setTimeout(function () {
    $('body')
        .removeClass('loading')
        .addClass('loaded');
}, 3000);