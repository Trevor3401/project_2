// -------------------------------------------------
// -------------------------------------------------
//main fader
// -------------------------------------------------
// -------------------------------------------------
$('.right-arrow-one').click(function() {
    $('#image-placeholder-one').animate({
        left: -1080
    }, "slow");
    $(".left-arrow-one").fadeIn("1000");
    $(".right-arrow-one").fadeOut("1000");
    return false;
});
$('.left-arrow-one').click(function() {
    $('#image-placeholder-one').animate({
        left: 0
    }, "slow");
    $(".left-arrow-one").fadeOut("1000");
    $(".right-arrow-one").fadeIn("1000");
    return false;
});