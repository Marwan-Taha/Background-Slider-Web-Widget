const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let activeSlide = 0;

setBgToBody();

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}


rightArrow.addEventListener('click', ()=>{

    slides[activeSlide].classList.remove('active');

    activeSlide++;

    if(activeSlide >= slides.length){
        activeSlide = 0;
    }

    setBgToBody();
    slides[activeSlide].classList.add('active')
})

leftArrow.addEventListener('click', ()=>{
    slides[activeSlide].classList.remove('active');

    activeSlide--;
    if(activeSlide < 0){
        activeSlide = slides.length-1;
    }
    setBgToBody();
    slides[activeSlide].classList.add('active')
})