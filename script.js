/* ============================================================
   ADIDAS PROJECT — CONSOLIDATED SCRIPT
   Structure:
   1. Content Configuration (edit your content here)
   2. DOM Rendering (injects config into the page)
   3. Utilities (shared helpers)
   4. Alert Banner
   5. Mobile Menu Toggle
   6. Slider Factory (reusable — used by both sliders)
   7. Video Modal
   8. SEARCH FUNCTIONALITY
   9. CONTACT FORM
   10.Initialization
============================================================ */

/* ── 1. CONTENT CONFIGURATION ──────────────────────────────
   Edit this object to change any page content.
   No need to touch HTML or scattered JS.
─────────────────────────────────────────────────────────── */
const CONFIG = {
    heroSlides: [
        {
            title: "GET READY FOR NEW ADIDAS BANDS",
            body: "Adidas tracks all begin with a starting gate and end with a finish line, but everything in between varies from track to track. Because no two tracks are exactly alike, this action sport keeps you on your toes wherever you are racing.",
            thumb: "Slicing/video-thumbnail-img.png",
            videoUrl: "https://www.youtube.com/embed/MMFqJFqdSJg",
        },
        {
            title: "RACE SEASON STARTS NOW",
            body: "Adidas tracks all begin with a starting gate and end with a finish line, but everything in between varies from track to track. Because no two tracks are exactly alike, this action sport keeps you on your toes wherever you are racing.",
            thumb: "Slicing/video-thumbnail-img.png",
            videoUrl: "https://www.youtube.com/embed/MMFqJFqdSJg",
        },
        {
            title: "JOIN THE ADIDAS COMMUNITY",
            body: "Adidas tracks all begin with a starting gate and end with a finish line, but everything in between varies from track to track. Because no two tracks are exactly alike, this action sport keeps you on your toes wherever you are racing.",
            thumb: "Slicing/video-thumbnail-img.png",
            videoUrl: "https://www.youtube.com/embed/MMFqJFqdSJg",
        },
        {
            title: "CHAMPIONSHIP EVENTS NEAR YOU",
            body: "Adidas tracks all begin with a starting gate and end with a finish line, but everything in between varies from track to track. Because no two tracks are exactly alike, this action sport keeps you on your toes wherever you are racing.",
            thumb: "Slicing/video-thumbnail-img.png",
            videoUrl: "https://www.youtube.com/embed/MMFqJFqdSJg",
        },
    ],

    productSlides: [
        { img: "Slicing/thubnail-slider-img.png", alt: "Adidas Shoe 1" },
        { img: "Slicing/thubnail-slider-img.png", alt: "Adidas Shoe 2" },
        { img: "Slicing/thubnail-slider-img.png", alt: "Adidas Shoe 3" },
        { img: "Slicing/thubnail-slider-img.png", alt: "Adidas Shoe 4" },
        { img: "Slicing/thubnail-slider-img.png", alt: "Adidas Shoe 5" },
        { img: "Slicing/thubnail-slider-img.png", alt: "Adidas Shoe 6" },
        { img: "Slicing/thubnail-slider-img.png", alt: "Adidas Shoe 7" },
    ],

    newsCards: [
        {
            img: "Slicing/post-img.png",
            title: "2019 National Champions Crowned at Reebok",
            body: "Membership has its perks. Joining Adidas means you can race at your local track.",
            link: "#",
        },
        {
            img: "Slicing/post-img.png",
            title: "2019 National Champions Crowned at Reebok",
            body: "Membership has its perks. Joining Adidas means you can race at your local track.",
            link: "#",
        },
        {
            img: "Slicing/post-img.png",
            title: "2019 National Champions Crowned at Reebok",
            body: "Membership has its perks. Joining Adidas means you can race at your local track.",
            link: "#",
        },
    ],

    specialCards: [
        {
            img: "Slicing/zig-zag-img-1.png",
            title: "2019 National Champions Crowned at Reebok",
            body: "Membership has its perks. Joining Adidas means you can race at your local track.",
            modifier: "s1",
        },
        {
            img: "Slicing/zig-zag-img-2.png",
            title: "2019 National Champions Crowned at Reebok",
            body: "Membership has its perks. Joining Adidas means you can race at your local track.",
            modifier: "s2",
        },
    ],

    events: [
        { date: "1", title: "Show in USA", location: "USA" },
        { date: "2", title: "Adidas Show in USA", location: "USA" },
        { date: "3", title: "Adidas Show", location: "USA" },
        { date: "4", title: "Adidas in USA", location: "USA" },
    ],
};

/* ── 2. DOM RENDERING ───────────────────────────────────────
   Reads CONFIG and builds the HTML. Keeps index.html clean.
─────────────────────────────────────────────────────────── */
function renderAll() {
    renderHeroSlides();
    renderProductSlides();
    renderNewsCards();
    renderSpecialCards();
    renderEvents();
}

function renderHeroSlides() {
    const container = document.getElementById("slider");
    if (!container) return;

    container.innerHTML = CONFIG.heroSlides
        .map(
            (slide) => `
        <div class="slide">
            <div class="hero-content">
                <div class="text-side">
                    <h1>${slide.title}</h1>
                    <p>${slide.body}</p>
                </div>
                <div class="video-side">
                    <div class="thumb-wrapper">
                        <img src="${slide.thumb}" alt="Video thumbnail">
                        <button class="play-btn" onclick="openModal('${slide.videoUrl}')" aria-label="Play video">
                            <img src="Slicing/play-icon.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
        )
        .join("");
}

function renderProductSlides() {
    const track = document.getElementById("pSlider");
    if (!track) return;

    track.innerHTML = CONFIG.productSlides
        .map(
            (slide) => `
        <div class="p-slide">
            <img src="${slide.img}" alt="${slide.alt}">
        </div>
    `,
        )
        .join("");
}

function renderNewsCards() {
    const grid = document.querySelector(".triple-grid");
    if (!grid) return;

    grid.innerHTML = CONFIG.newsCards
        .map(
            (card) => `
        <article class="content-card content-card--news">
            <img src="${card.img}" alt="${card.title}">
            <h4>${card.title}</h4>
            <p>${card.body}</p>
            <a href="${card.link}" aria-label="Read more about ${card.title}">READ MORE</a>
        </article>
    `,
        )
        .join("");
}

function renderSpecialCards() {
    const section = document.querySelector(".area-special");
    if (!section) return;

    section.innerHTML = CONFIG.specialCards
        .map(
            (card) => `
        <article class="content-card content-card--special ${card.modifier}">
            <img src="${card.img}" alt="${card.title}">
            <div class="info">
                <h4>${card.title}</h4>
                <p>${card.body}</p>
            </div>
        </article>
    `,
        )
        .join("");
}

function renderEvents() {
    const list = document.querySelector(".events-sidebar ul");
    if (!list) return;

    list.innerHTML = CONFIG.events
        .map(
            (ev) => `
        <li>
            <span aria-label="Event ${ev.date}">${ev.date}</span>
            <div>${ev.title}<br><small>${ev.location}</small></div>
        </li>
    `,
        )
        .join("");
}

/* ── 3. UTILITIES ───────────────────────────────────────────
   Shared helper functions used by multiple components.
─────────────────────────────────────────────────────────── */

/**
 * Builds dot-pagination inside a container element.
 * @param {Element} container  - the pagination wrapper element
 * @param {number}  total      - number of dots to create
 * @param {number}  activeIdx  - which dot starts active
 * @param {Function} onDotClick - called with the dot index when clicked
 */
function buildPagination(container, total, activeIdx, onDotClick) {
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < total; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === activeIdx) dot.classList.add("active");
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.addEventListener("click", () => onDotClick(i));
        container.appendChild(dot);
    }
}

/**
 * Updates which dot is marked active without rebuilding all dots.
 * @param {Element} container - the pagination wrapper element
 * @param {number}  activeIdx - the index of the now-active dot
 */
function setActiveDot(container, activeIdx) {
    if (!container) return;
    container.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === activeIdx);
    });
}

/**
 * Attaches touchstart / touchend swipe detection to an element.
 * @param {Element}  el       - the element to watch
 * @param {Function} onLeft   - called on left swipe  (next)
 * @param {Function} onRight  - called on right swipe (prev)
 */
function addSwipeSupport(el, onLeft, onRight) {
    if (!el) return;
    let startX = 0;
    el.addEventListener(
        "touchstart",
        (e) => {
            startX = e.touches[0].clientX;
        },
        { passive: true },
    );
    el.addEventListener("touchend", (e) => {
        const delta = startX - e.changedTouches[0].clientX;
        if (delta > 50) onLeft();
        if (delta < -50) onRight();
    });
}

/* ── 4. ALERT BANNER ────────────────────────────────────────── */
function closeAlert() {
    const alert = document.getElementById("topAlert");
    if (alert) alert.style.display = "none";
}

/* ── 5. MOBILE MENU TOGGLE ──────────────────────────────────── */
function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    if (!toggle || !navbar) return;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = navbar.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && !toggle.contains(e.target)) {
            navbar.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
}

/* ── 6. SLIDER FACTORY ──────────────────────────────────────
   Created a fully functional slider from config options.
─────────────────────────────────────────────────────────── */

/**
 * @param {object} options
 * @param {string}   options.trackId      - id of the sliding flex container
 * @param {string}   options.prevId       - id of the prev button
 * @param {string}   options.nextId       - id of the next button
 * @param {string}   options.paginationId - id of the pagination container
 * @param {Function} options.getVisible   - returns how many slides are visible at current viewport
 * @param {boolean}  [options.infinite]   - whether to loop around at the ends (default: false)
 */
function createSlider({
    trackId,
    prevId,
    nextId,
    paginationId,
    getVisible,
    infinite = false,
}) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    const pagination = document.getElementById(paginationId);

    if (!track) return null;

    let index = 0;

    function getSlides() {
        return track.querySelectorAll(":scope > *");
    }
    function getMax() {
        return Math.max(0, getSlides().length - getVisible());
    }
    function getTotalDots() {
        return getMax() + 1;
    }

    function move() {
        const visible = getVisible();
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;

        if (gap > 0) {
            track.style.transform = `translateX(calc(-${(index * 100) / visible}% - ${(index * gap) / visible}px))`;
        } else {
            track.style.transform = `translateX(-${(index * 100) / visible}%)`;
        }
        setActiveDot(pagination, index);
    }

    function goTo(i) {
        const max = getMax();
        if (infinite) {
            index = (i + getTotalDots()) % getTotalDots();
        } else {
            index = Math.min(Math.max(i, 0), max);
        }
        move();
    }

    function rebuildPagination() {
        buildPagination(pagination, getTotalDots(), index, goTo);
    }

    prevBtn?.addEventListener("click", () => goTo(index - 1));
    nextBtn?.addEventListener("click", () => goTo(index + 1));

    addSwipeSupport(
        track,
        () => goTo(index + 1), // left swipe = next
        () => goTo(index - 1), // right swipe = prev
    );

    // Public API
    return {
        move,
        rebuildPagination,
        reset() {
            index = 0;
            rebuildPagination();
            move();
        },
    };
}

/* ── 7. VIDEO MODAL ─────────────────────────────────────────
   FIXED: uses native <dialog> element instead of div.
   Benefits: built-in focus trap, ESC key, backdrop, ARIA.
─────────────────────────────────────────────────────────── */
function openModal(url) {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    if (!modal || !frame) return;
    frame.src = url + "?autoplay=1";
    modal.showModal(); // Native <dialog> method
}

function closeModal() {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    if (!modal || !frame) return;
    modal.close(); // Native <dialog> method
    frame.src = "";
}

/* ── 8. SEARCH FUNCTIONALITY ── */
function initSearch() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInputBar");

    if (!searchForm || !searchInput) return;

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            alert("Search functionality coming soon! You searched for: " + query);
            searchInput.value = ""; // clear input after search
        }
    });
}

/* ── 9. CONTACT FORM ─────────────────────────────────────────
   Handles the contact form submission without reloading the page.
─────────────────────────────────────────────────────────── */
function initContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default page reload

        const formData = new FormData(form);
        const name = formData.get("name") || "there";

        alert(`Thank you, ${name}! Your message has been received.`);
        form.reset(); // Clear the inputs after submission
    });
}

/* ── 10. INITIALIZATION ──────────────────────────────────────
   Boot order: render content first, then attach behaviors.
─────────────────────────────────────────────────────────── */
(function init() {
    // 1. Render all content from CONFIG into the DOM
    renderAll();

    // 2. Init mobile menu
    initMobileMenu();

    // Init search functionality
    initSearch();

    // Init contact form
    initContactForm();

    // 3. Hero slider — always shows 1 slide
    const heroSlider = createSlider({
        trackId: "slider",
        prevId: "prevBtn",
        nextId: "nextBtn",
        paginationId: "pagination",
        getVisible: () => 1,
        infinite: true,
    });
    heroSlider?.rebuildPagination();
    heroSlider?.move();

    // 4. Product slider — visible count changes per breakpoint
    function getProductVisible() {
        if (window.innerWidth >= 1220) return 4;
        if (window.innerWidth >= 768) return 3;
        return 1;
    }

    const productSlider = createSlider({
        trackId: "pSlider",
        prevId: "pPrevBtn",
        nextId: "pNextBtn",
        paginationId: "sliderPagination",
        getVisible: getProductVisible,
    });
    productSlider?.rebuildPagination();
    productSlider?.move();

    // 5. Rebuild product slider on resize (debounced)
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            productSlider?.reset();
        }, 250);
    });
})();
