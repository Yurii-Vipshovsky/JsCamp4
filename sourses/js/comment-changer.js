$(document).ready(function() {
    const $carousel = $('.testimonials-block__comments-container');
    const $slides = $carousel.children('.comment');
    const totalSlides = 3;    
    let currentIndex = 0;
            
    function showSlide(index) {
        const slideWidth = 2 * $slides.outerWidth(true);
        console.log('showSlide');
        $carousel.stop().animate({
            marginLeft: -(index * slideWidth)
        }, 500);
    }
            
    function nextSlide() {
        console.log('nextSlide');
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
    }
            
    function prevSlide() {
        console.log('prevSlide');
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }
            
    $('#testimonials-block__next-button').on('click', nextSlide);
    $('#testimonials-block__prev-button').on('click', prevSlide);
            
    showSlide(currentIndex);
});