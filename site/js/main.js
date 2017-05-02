function jumpTo(element) 
{
    $('html, body').animate(
    {
        scrollTop: $("." + element).offset().top
    }, 500);
}

$(window).on('scroll', function () 
{
    if ($(window).scrollTop() >= $('.opening').height()-1)
    {
        $('.nav_desktop').addClass('stick');
    }
    else
    {
        $('.nav_desktop').removeClass('stick');
    }
});
