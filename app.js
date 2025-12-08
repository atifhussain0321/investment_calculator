// Padding Provider System
mainBox = document.querySelector(".Main");
navbar = document.querySelector(".Navbar")

function paddingFnc(){
if (window.innerWidth > 1200){
    padding =  window.innerWidth/5 + "px";
    mainBox.style.padding = "100px " + padding;
    navbar.style.padding = "0px " + padding;
} 
else {
    navbar.style.padding = "0px 20px"
    mainBox.style.padding = "100px 20px"
}
}

paddingFnc()

window.addEventListener('resize',paddingFnc)