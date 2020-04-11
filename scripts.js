$(function () {
    $('.hamburger').on('click', function () {
        // toggle class show on the menu
        $('.menu').addClass('show');
        $('.social-links').addClass('hide-links');
    });


    $('.exit-responsive').on('click', function () {
        // toggle class show on the menu
        $('.menu').removeClass('show');
        $('.social-links').removeClass('hide-links');
    });

    $('.menu a').on('click', function () {
        // toggle class show on the menu
        $('.menu').removeClass('show');
        $('.social-links').removeClass('hide-links');
    });

    $('a').on('click', function () {
        $(document).off("scroll");
        const $section = $(this).attr('href');
        $('html, body').animate({
            'scrollTop': $(`${$section}`).offset().top
        }, 500);
    });
    
});