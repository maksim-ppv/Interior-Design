
const arrowBottom = document.querySelector('.about__arrow-bottom');
const aboutBlock = document.querySelector('.about__block');


arrowBottom.addEventListener('click', ()=>{
    aboutBlock.classList.toggle('width');
    arrowBottom.classList.toggle('about__arrow-bottom_active');
});