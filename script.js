// script.js

document.addEventListener('DOMContentLoaded', () => {
    const changeFontBtn = document.getElementById('changeFontBtn');
    const greetingText = document.getElementById('greeting').querySelector('p');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const quoteDisplay = document.getElementById('quoteDisplay');
    const images = document.querySelectorAll('.slider img');
    const modal = document.getElementById('modal');
    const infoBtn = document.getElementById('infoBtn');
    const closeModalBtn = document.querySelector('.close');
    let currentImageIndex = 0;

    const quotes = [
        "The mind is everything. What you think you become.",
        "Peace comes from within. Do not seek it without.",
        "You will not be punished for your anger, you will be punished by your anger.",
        "Happiness will never come to those who fail to appreciate what they already have.",
        "The only real failure in life is not to be true to the best one knows."
    ];

    const fonts = ['"Open Sans", sans-serif', '"Cinzel", serif', '"Poppins", sans-serif'];
    let currentFontIndex = 0;

    changeFontBtn.addEventListener('click', () => {
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
        greetingText.style.fontFamily = fonts[currentFontIndex];
    });

    newQuoteBtn.addEventListener('click', () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteDisplay.textContent = randomQuote;
    });

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);
    images[0].classList.add('active');

    infoBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function changeBackgroundColor() {
        const colors = ['#ffebcd', '#faebd7', '#ffe4e1', '#e6e6fa'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }

    setInterval(changeBackgroundColor, 5000);
});
