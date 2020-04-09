$(function () {
    $('.hamburger').on('click', function () {
        // toggle class show on the menu
        $('.menu').addClass('show');
    });

    $('.exit-responsive').on('click', function () {
        // toggle class show on the menu
        $('.menu').removeClass('show');
    });

    $('.menu a').on('click', function () {
        // toggle class show on the menu
        $('.menu').removeClass('show');
    });

    $('a').on('click', function () {
        $(document).off("scroll");
        const $section = $(this).attr('href');
        $('html, body').animate({
            'scrollTop': $(`${$section}`).offset().top
        }, 500);
    });
    
});