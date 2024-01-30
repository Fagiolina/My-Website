const slides = document.querySelector('.slides');

function autoSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); // Adjust the time interval (in milliseconds) for the automatic slide
}

document.addEventListener('DOMContentLoaded', autoSlide);

