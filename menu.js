const down = document.querySelector('.open');
const menu = document.querySelector('.menu-nav');

down.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != down){
        menu.classList.toggle("spread")
    }
})