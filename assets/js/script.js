// Responive NAvbar 
const icon = document.querySelector('#icon');
// const toogleBtn = document.querySelector('.menu-bar');
const navMenu = document.querySelector('.nav-menu');

icon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    icon.classList.toggle('fa-times')
});

// On scroll Fuction 

const navbar = document.querySelector('.navbar');

window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add('onScroll');
    }
    else{
        navbar.classList.remove('onScroll');
    }
}

// Image Source change 

const mainImg = document.querySelector('#mainImg');
const smallImg = document.querySelectorAll('.small-img');

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src ;
};

smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src ;
}

smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src ;
}

smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src ;
}