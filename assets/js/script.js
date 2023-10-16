// Responsive Navbar
const icon = document.querySelector('#icon');
const navMenu = document.querySelector('.nav-menu');

if (icon && navMenu) {
    icon.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        icon.classList.toggle('fa-times');
    });
}

// On scroll Function
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.onscroll = function () {
        document.documentElement.scrollTop > 20 ? navbar.classList.add('onScroll') : navbar.classList.remove('onScroll');
    };
}

// Image Source change
const mainImg = document.querySelector('#mainImg');
const smallImg = document.querySelectorAll('.small-img');

if (mainImg && smallImg) {
    smallImg.forEach((img, index) => {
        img.onclick = function () {
            mainImg.src = smallImg[index].src;
        };
    });
}
