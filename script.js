const buttonShow = document.querySelector('.list-objects');

buttonShow.addEventListener('click', () =>{
    const sideBar = document.querySelector('.slider-obj');
    sideBar.classList.toggle('active');
})