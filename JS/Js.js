const navBtn = document.querySelector('.header-icon .icons');
const navBar = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation .ul-content');
const navIcon = document.querySelector('.navigation .ul-icon');
navBtn.addEventListener('click',function(){
    navToggle.classList.toggle('ul-toggle');
    navBar.classList.toggle('nav');
    navBar.classList.toggle('nav1');
});
// Responsive Navbar Controls
if(window.innerWidth>=771){
    navBar.addEventListener('mouseenter',()=>{
        navToggle.classList.remove('ul-toggle');
        navBar.classList.toggle('nav');
    });
    navBar.addEventListener('mouseleave',()=>{
        navToggle.classList.add('ul-toggle');
        navBar.classList.toggle('nav');
    });
}
// Video Speed Control
const video =  document.getElementsByTagName('video');
video[0].playbackRate = 2.0;
