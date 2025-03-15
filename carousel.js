// --------------- VARIABLES ---------------

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel img');


// --------------- FUNCTIONS ---------------

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    slides.forEach((slide, i) => {
        if (i === slideIndex) {
        slide.style.display = 'block';
        } else {
        slide.style.display = 'none';
        }
    });
}


// --------------- Main Code ---------------

function prevSlide() {
    showSlide(--slideIndex);
    }

    function nextSlide() {
    showSlide(++slideIndex);
}

showSlide(slideIndex);
