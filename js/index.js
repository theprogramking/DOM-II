// Annoying message
document.addEventListener("load", () => {
    console.log("Hello there good sir!");
});

// Logo 
let hideElement = function(){
    this.style.display = "none";
};
const logo = document.getElementsByClassName("logo-heading");
logo[0].addEventListener("drag", hideElement, false);

// Center headers on resize
let beaut = function(){
    if(window.innerHeight < 600){
        const headers = document.getElementsByTagName("h2");
        for(var i = 0; i < headers.length; i++){
            headers[i].style.textAlign = "center";
        }
    }
};
window.addEventListener("resize", beaut, false);

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
const images = document.getElementsByTagName("img");
for (var j = 0; j < images.length; j++) {
    images[j].addEventListener("dblclick", addBorder, false);
}

// Scroll event
let scrollEvent = function(){
    let paragraphs = document.getElementsByTagName("p");
    for(var i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.fontSize = "25px";
    }
};
window.addEventListener("scroll", scrollEvent, false);

// Add border to button
let borderButton = function(){
    this.style.border = "3px solid blue";
};
let removeBorderButton = function(){
    this.style.border = "none";
};
const button = document.getElementsByClassName("btn");
for(var k = 0; k < button.length; k++){
    button[k].addEventListener("mouseover", borderButton, false);
    button[k].addEventListener("click", removeBorderButton, false);
}