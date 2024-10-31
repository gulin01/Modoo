const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

function showItem() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length; // Loop back to the start
    showItem();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length; // Loop to the end if negative
    showItem();
});
