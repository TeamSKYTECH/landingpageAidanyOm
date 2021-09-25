$(".slider > div:gt(0)").hide();

setInterval(function() {
    $('.slider > div:first')
        .fadeOut(2400)
        .next()
        .fadeIn(2400)
        .end()
        .appendTo('.slider');
}, 5000);
