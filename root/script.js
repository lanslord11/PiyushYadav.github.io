$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // function of the menu button 
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.navbar i').toggleClass("active");

    })


});