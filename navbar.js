window.onscroll = function () { stickNavBarToTopOfScreen() };

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function stickNavBarToTopOfScreen() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}





