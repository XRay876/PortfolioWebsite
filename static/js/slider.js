const slider = () => {

    const sliderContainer = document.querySelectorAll('.slider-images');
    sliderContainer.forEach((slider)=>{
        let sliderImages = Array.from(slider.querySelectorAll('.project-logo'));
        const buttonPrev = slider.parentElement.querySelector('.prev-button');
        const buttonNext = slider.parentElement.querySelector('.next-button');
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
};

export default slider;