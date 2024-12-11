// Optional: Scroll control for more advanced behavior
document.addEventListener('wheel', function(event) {
    // Handle scroll events manually (e.g., to scroll to the next or previous section)
    if (event.deltaY < 0) {
        // Scroll down
        scrollToNextSlide();
    } else {
        // Scroll up
        scrollToPrevSlide();
    }
});

// Scroll to the next slide
function scrollToNextSlide() {
    const currentSlide = document.querySelector('.slide.active');
    let nextSlide = currentSlide ? currentSlide.nextElementSibling : document.querySelector('.slide:first-child');

    if (nextSlide) {
        nextSlide.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll to the previous slide
function scrollToPrevSlide() {
    const currentSlide = document.querySelector('.slide.active');
    let prevSlide = currentSlide ? currentSlide.previousElementSibling : document.querySelector('.slide:last-child');

    if (prevSlide) {
        prevSlide.scrollIntoView({ behavior: 'smooth' });
    }
}
