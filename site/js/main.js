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




var statistics = 
{
    "orders" : 
    [
        {
            "company" : "Air Canada",
            "amount" : "61"
        },
        {
            "company" : "American Airlines",
            "amount" : "100"
        },
        {
            "company" : "Fly Dubai",
            "amount" : "75"
        },
        {
            "company" : "Norwegian",
            "amount" : "108"
        },
        {
            "company" : "Ryanair",
            "amount" : "100"
        },
        {
            "company" : "Southwest Airlines",
            "amount" : "200"
        },
        {
            "company" : "SpiceJet",
            "amount" : "142"
        },
        {
            "company" : "TUI Travel",
            "amount" : "70"
        },
        {
            "company" : "Turkish Airlines",
            "amount" : "75"
        },
        {
            "company" : "United Airlines",
            "amount" : "99"
        },
        {
            "company" : "WestJet",
            "amount" : "65"
        }
    ]
}

function createStats(statistics)
{
    var orders = statistics.orders.length;
    var i = 0;
    var colors = ["#4f87e2","#e550e5","#dbd143","#33e875"];

    while (i < orders)
    {
        var company = statistics.orders[i].company;
        var amount = statistics.orders[i].amount;
        $("<div class='diagram' style='width:"+(amount/200)*100+"%;background-color:"+colors[i%colors.length]+";'>"+company+" ordered "+amount+"</div>").appendTo(".diagrams");
        i+=1;
    }
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
beginSlideShow()

function showDivs(n) {
    $('.previews').empty();
    var previews = document.getElementsByClassName("preview");
    
    var i;
    var j = slideIndex;
    var pictures = document.getElementsByClassName("picture");
    
    if (n > pictures.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = pictures.length} ;
    for (i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none"; 
    }
    pictures[slideIndex-1].style.display = "block";
console.log(slideIndex)
    j -= 1;
    if (0 >= j) {j = previews.length - 1}
    $(previews[j-1].outerHTML).appendTo('.previews');

    j = slideIndex;
    if (j > previews.length) {j = 1}
    $(previews[j-1].outerHTML).appendTo('.previews');

    j += 1;
    if (j > previews.length) {j = 1}
    $(previews[j-1].outerHTML).appendTo('.previews');

}

function beginSlideShow()
{
    setInterval(function()
    { 
        plusDivs(+1)
    }, 5000);
}