
let darkMode = false;
var dark = document.getElementById("dark");
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");
var nav = document.getElementById("nav");
var body = document.getElementById("body");
let logo = document.getElementById("logo")

dark.addEventListener('click', handleCLick)

function handleCLick() {
  if (darkMode === false) {
    darkMode = true;
    moon.style.visibility = "hidden";
    sun.style.visibility = "visible";
    dark.style.backgroundColor = "white";
    body.style.backgroundColor = "rgb(40, 46, 65)"
    nav.style.backgroundColor = "#28292e"
    logo.src = "./assets/blueQuote_dark.svg"
  }
  else {
    darkMode = false;
    dark.style.backgroundColor = "#2e2f30";
    body.style.backgroundColor = "#eee"
    sun.style.visibility = "hidden";
    moon.style.visibility = "visible";
    nav.style.backgroundColor = "#dcdee6";
    logo.src = "./assets/blueQuote_light.svg"
    
  }
}
function handleClick(){
    darkMode=true
    console.log(darkMode)
}

//  Code for sticky navbar
window.onscroll = function () { myNav() };

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}