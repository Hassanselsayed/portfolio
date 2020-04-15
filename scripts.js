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


    const $form = $('form');
    const $name = $('#name');
    const $email = $('#email');
    const $message = $('#message');

    $form.on('submit', (e) => {
        e.preventDefault();
            postEmail();
            $('#submit').focus();
            alert(`Thank you for your email, ${$name.val()}. Will get back to you ASAP!`);
            clearFields();
    })
    clearFields = () => {
        $name.val('');
        $email.val('');
        $message.val('');
        
    }
    postEmail = () => {
        $.ajax({
            url: 'https://formspree.io/xbjawyzd',
            method: 'POST',
            data: {
                email: $email.val(),
                name: $name.val(),
                message: $message.val(),
            },
            dataType: 'json'
        })
    }
    $('#message').keydown(function (event) {
        if (event.keyCode == 13) {
            $(this.form).submit()
            return false;
        }
    });
});