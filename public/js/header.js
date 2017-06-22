$('.header-logo').on('click', function () {

    $(this).parent().toggleClass('hidelittle');

    $(this).parent().next().toggleClass('hideNav');
    $('.body').toggleClass('bigbody');
});