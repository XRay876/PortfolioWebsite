document.addEventListener('DOMContentLoaded', ()=> {

    const sliderContainer1 = document.querySelector('.slider-images1');
    let sliderImages = Array.from(sliderContainer1.querySelectorAll('.project-logo'));
    console.log(sliderImages);
    const buttonPrev = document.querySelector('.prev-button');
    const buttonNext = document.querySelector('.next-button');
    let currentSlide = 0;

    buttonNext.addEventListener('click', nextSlide);
    buttonPrev.addEventListener('click', prevSlide);

    function nextSlide() {
        currentSlide+=1;
        if (currentSlide >= sliderImages.length) {
            currentSlide = 0;
        }
        
        showSlide();
    }

    function prevSlide() {
        currentSlide-=1;
        if (currentSlide < 0) {
            currentSlide = sliderImages.length-1;
        }
        showSlide();
    }

    function showSlide() {
        sliderImages.forEach((slide, index)=>{
            if (index === currentSlide) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    showSlide();
    
});