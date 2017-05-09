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
        $('.navfix').removeClass('hidden');
    }
    else
    {
        $('.nav_desktop').removeClass('stick');
        $('.navfix').addClass('hidden');
    }
});


function openNav() 
{
    document.getElementsByClassName("sidenav")[0].style.width = "100%";
}

function closeNav() 
{
    document.getElementsByClassName("sidenav")[0].style.width = "0";
}