
var mobileMenuBtn = document.querySelector('.menuBtn')
var mobileMenuClose = document.querySelector('.closeBtn')
var nav = document.querySelector('nav');
mobileMenuBtn.addEventListener('click', ()=>{
    nav.classList.add('open-nav')
})
mobileMenuClose.addEventListener('click', ()=>{
    nav.classList.remove('open-nav')
})


var downArrow = document.querySelector('.down-arrow')
