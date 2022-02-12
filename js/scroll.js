var lastScrollVal = 0;
var projectVisualadded = false;

var projects = document.getElementById("#projects");
var myName = document.getElementById("#name");

function projectAnimations(){


let direction = lastScrollVal < window.scrollY;
lastScrollVal = window.scrollY;
//console.log(direction);
if(window.scrollY > 280){
    projects.classList.add("ProjectVisual");
    myName.classList.remove("name");
    myName.classList.add("ProjectVisualName");
    projectVisualadded = true;
    console.log(window.scrollY);
}else{
    projects.classList.remove("ProjectVisual");
    projectVisualadded = true;
    myName.classList.add("name");
    myName.classList.remove("ProjectVisualName");
}



}


window.addEventListener('scroll', projectAnimations);
