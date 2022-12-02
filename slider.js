const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const pictures = document.querySelectorAll('.picture')

let slideNumber = 1
const length = pictures.length

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 400}px)`;
    slideNumber++
}
const prevSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1
}


right.addEventListener('click',()=>{

    slideNumber < length ? nextSlide() : prevSlide()
    
})




