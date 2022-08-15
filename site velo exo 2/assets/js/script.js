function toggleMenu () {  
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
  });    
}
toggleMenu();


function toggleButton () { 

const body = document.querySelector('body')
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  
}}

toggleButton();


var barre = document.querySelector("#barre");
var button_a = document.querySelectorAll("button a");

function animationBarre(e){
    barre.style.left=e.offsetLeft + "px";
    barre.style.width=e.offsetWidth + "px";
}

button_a.forEach(element =>{
    element.addEventListener("mousemove", (e)=>{
        animationBarre(e.target);
    })
})

document.oncontextmenu = new Function("return false");