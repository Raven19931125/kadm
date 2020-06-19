$(document).ready(function () {

    $('.burger').on('click', function () {
        $('.menu').addClass('open');
    });
    $('.closed-menu').on('click', function () {
        $('.menu').removeClass('open');
    })

    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1
    });
    $('.reviews-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1
    });
    $('.owl-dot').each(function(){
        $(this).children('span').text($(this).index()+1);
    });
    $('.show-form').on('click',function () {
        $('.shadow').css("display","block")
    });
    $('.closed').on('click',function () {
        $('.shadow').css("display","none")
    });
});