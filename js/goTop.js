//gotop
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("GoTop").style.display = "block";
    } else {
        document.getElementById("GoTop").style.display = "none";
    }
   
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({scrollTop:0}, 'slow');
}
