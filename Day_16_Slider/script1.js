let currentSlide = 0; // To track which slide is currently visible

// Get all carousel items (slides)
const slides = document.querySelectorAll('.carousel-item');

// Show the slide at the current index, hide the rest
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Ensure index wraps around (loop)
    if (index < 0) {
        currentSlide = slides.length - 1; // Go to last slide
    } else if (index >= slides.length) {
        currentSlide = 0; // Go to first slide
    } else {
        currentSlide = index; // Go to the requested index
    }

    // Show the current slide
    slides[currentSlide].classList.add('active');
}

// Go to the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Go to the previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}
