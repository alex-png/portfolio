window.onscroll = function () { stickNavBarToTopOfScreen() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavBarToTopOfScreen() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}





