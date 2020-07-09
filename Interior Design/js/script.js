
const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile__navbar');
const burger = document.querySelector('.menu-button__line');
const menuHeaderName = document.querySelector('.menu-header__name');



const modal = ()=>{
   menu.classList.toggle('menu_active');
   btn.classList.toggle('line_active');
}

menuHeaderName.addEventListener('click', modal)
btn.addEventListener('click', modal);
;

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });