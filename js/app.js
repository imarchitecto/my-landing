$(document).ready(function() {
    $('.about-top__column_burger').click(function(event) {
        $('.about-top__column_burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
})