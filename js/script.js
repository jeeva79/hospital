const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click' , ()=> {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click' , ()=> {
    wrapper.classList.remove('active');
});

const btnPopup = document.querySelector('.btn-popup');
btnPopup.addEventListener('click', () => {
    container.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});