// var barre = document.querySelector("#barre");
// var nav_a = document.querySelectorAll("nav a");

// function animationBarre(e){
//     barre.style.left=e.offsetLeft + "px";
//     barre.style.width=e.offsetWidth + "px";
// }

// nav_a.forEach(element =>{
//     element.addEventListener("mousemove", (e)=>{
//         animationBarre(e.target);
//     })
// })


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