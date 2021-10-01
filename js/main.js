//$('.header-nav__btn-hamburger').click(function() {
//    $('.header-nav__box').addClass('header-nav__box--active');
//});
$('.header-nav__btn-hamburger').on('click', function() {
    $('.header-nav__box').toggleClass('header-nav__box--active');
});