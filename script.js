const buttonShow = document.querySelector('.list-objects');
const main = document.querySelector('main')

buttonShow.addEventListener('click', () =>{
    const sideBar = document.querySelector('.slider-obj');
    const items = document.querySelector('ul');
    const titulo = document.querySelector('h2');
    sideBar.classList.toggle('active');
    items.classList.toggle('active');
    titulo.classList.toggle('active');
})
