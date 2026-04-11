/* ALERT BANNER */
function closeAlert() {
    const alert = document.getElementById('topAlert');
    if (alert) alert.style.display = 'none';
}

/* MOBILE MENU TOGGLE */
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents immediate closing from the document listener
        navbar.classList.toggle('open');
    });

    /* MENU WILL CLOSE WHEN CLICKED OUTSIDE */
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
            navbar.classList.remove('open');
        }
    });
}

/* VIDEO SLIDER */
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagination = document.getElementById('pagination');

let currentIndex = 0;

// Initialize Video Pagination
if (pagination && slides.length > 0) {
    createPagination(pagination, slides.length, 0, (i) => goToSlide(i));
}

function updateSlider() {
    const dots = pagination.querySelectorAll('.dot');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });
}

// Video Slider Swipe Support
let touchStartX = 0;
if (slider) {
    slider.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX, {passive: true});
    slider.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) nextBtn.click(); 
        if (touchStartX - touchEndX < -50) prevBtn.click();
    });
}

/* VIDEO MODAL LOGIC */
const modal = document.getElementById('videoModal');
const frame = document.getElementById('videoFrame');

function openModal(url) {
    frame.src = url + "?autoplay=1";
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    frame.src = "";
}

/* PRODUCT (SHOE) SLIDER */
const pSlider = document.getElementById('pSlider');
const sliderPagination = document.getElementById('sliderPagination');
const pPrevBtn = document.getElementById('pPrevBtn');
const pNextBtn = document.getElementById('pNextBtn');
let pIndex = 0;

function moveSlider() {
    if (!pSlider) return;
    let visible = window.innerWidth >= 1024 ? 4 : (window.innerWidth >= 768 ? 3 : 1);
    const widthFactor = 100 / visible;
    pSlider.style.transform = `translateX(-${pIndex * widthFactor}%)`;
    updateShoePagination();
}

function createShoePagination() {
    if (!sliderPagination) return;
    const pSlides = document.querySelectorAll('.p-slide');
    const visible = window.innerWidth >= 1024 ? 4 : (window.innerWidth >= 768 ? 3 : 1);
    const totalPositions = Math.max(1, pSlides.length - visible + 1);
    
    createPagination(sliderPagination, totalPositions, pIndex, (i) => {
        pIndex = i;
        moveSlider();
    });
}

function updateShoePagination() {
    const dots = sliderPagination.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === pIndex);
    });
}

// Shoe Slider Swipe Support
let startX = 0;
if (pSlider) {
    pSlider.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive: true});
    pSlider.addEventListener('touchend', e => {
        let endX = e.changedTouches[0].clientX;
        let visible = window.innerWidth >= 1024 ? 4 : (window.innerWidth >= 768 ? 3 : 1);
        const max = document.querySelectorAll('.p-slide').length - visible;

        if (startX - endX > 50 && pIndex < max) pIndex++; 
        else if (startX - endX < -50 && pIndex > 0) pIndex--;
        
        moveSlider();
    });
}

if (pNextBtn) {
    pNextBtn.addEventListener('click', () => {
        let visible = window.innerWidth >= 1024 ? 4 : (window.innerWidth >= 768 ? 3 : 1);
        const max = document.querySelectorAll('.p-slide').length - visible;
        if (pIndex < max) pIndex++;
        moveSlider();
    });
}

if (pPrevBtn) {
    pPrevBtn.addEventListener('click', () => {
        if (pIndex > 0) pIndex--;
        moveSlider();
    });
}

/* SHARED UTILITIES */
function createPagination(container, totalPositions, currentIndex, onDotClick) {
    container.innerHTML = '';
    for (let i = 0; i < totalPositions; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => onDotClick(i));
        container.appendChild(dot);
    }
}

/* INITIALIZATION & OPTIMIZED RESIZE */
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate layout after resizing stops
        const pSlides = document.querySelectorAll('.p-slide');
        const visible = window.innerWidth >= 1024 ? 4 : (window.innerWidth >= 768 ? 3 : 1);
        const maxIndex = Math.max(0, pSlides.length - visible);
        
        if (pIndex > maxIndex) pIndex = maxIndex;
        
        moveSlider();
        createShoePagination();
    }, 250);
});

// Run on initial load
createShoePagination();
moveSlider();