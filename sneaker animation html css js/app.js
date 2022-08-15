const card = document.querySelector('.card');
const container = document.querySelector('.container');

const sneaker = document.querySelector('.sneaker img');
const title = document.querySelector('.title');
const desc = document.querySelector('.short_desc');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');
const sizeBtn = document.querySelectorAll('.sizes button');

const sizeArray = [30 ,32, 34, 36];

container.addEventListener('mousemove', (e)=> {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
});

//Animation In
container.addEventListener('mouseenter', _=> {
    card.style.transition = 'none';
    title.style.transform = `translateZ(75px)`;
    sneaker.style.transform = `translateZ(100px) rotateZ(-45deg)`;
    desc.style.transform = `translateZ(50px)`;
    sizes.style.transform = `translateZ(40px)`;
    purchase.style.transform = `translateZ(35px)`;
});

//Animation Out
container.addEventListener('mouseleave', _=> {
    card.style.transition = 'all 0.5s ease';
    card.style.transform =`rotateX(0deg) rotateY(0deg)`;
    title.style.transform = `translateZ(0)`;
    sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
    desc.style.transform = `translateZ(0px)`;
    sizes.style.transform = `translateZ(0px)`;
    purchase.style.transform = `translateZ(0px)`;
});

sizeBtn.forEach(item =>{
    item.addEventListener('click', e=> {
        const selectId = e.target.id;
        sizeArray.forEach(size => {
            if(selectId == size) {
                document.getElementById(selectId).classList.add('active');
            }
            else {
                document.getElementById(size).classList.remove('active');
            }
            
        });
    });
});

