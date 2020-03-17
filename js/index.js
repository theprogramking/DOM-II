// Annoying message
document.addEventListener("load", () => {
    console.log("Hello there good sir!");
});

// Navigation
let underline = function() {
    this.style.textDecoration = "underline";
};
let removeUnderline = function(){
    this.style.textDecoration = "none";
};
var navLink= document.getElementsByClassName("nav-link");
for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("mouseover", underline, false);
    navLink[i].addEventListener("mouseout", removeUnderline, false);
}

// Move page to top on keypress
let moveToTop = function(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
};
document.addEventListener("keypress", moveToTop, false);

// Mess with the images a little bit
let addBorder = function() {
    this.style.border = "10px solid #000";
};
var images = document.getElementsByTagName("img");
for (var j = 0; j < images.length; j++) {
    images[j].addEventListener("dblclick", addBorder, false);
}