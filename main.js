// Get elements from the DOM
const container = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".slide");

// Offset value for the slides container
let offset=0;
// Slide ID
let slideID=0;

setInterval(()=>{
    // Set offset to slide width
    offset=slides[0].offsetWidth;
    // Set container transition
    container.style.transition="left ease-in-out 0.5s";
    // Move slides container by negative offset
    container.style.left=-offset+"px";
    // Set a timeout
    setTimeout(()=>{
        // Remove container transition
        container.style.transition="none";
        // Move the curretn clide to the last position
        slides[slideID].style.order=slides.length-1;
        // Move the container back to the starting position
        container.style.left=0;
        // Increment slide ID
        slideID++;
        // If the slide ID reaches the slides length
        if(slideID===slides.length){
            // Set the slide ID to zero
            slideID=0;
            // select all slides
            slides.forEach(slide=>{
                // Reset all alides order
                slide.style.order="initial";
            });
        }
    },500);
},3000);

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};