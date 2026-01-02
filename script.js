// ============================================
// SCROLL-BASED VISIBILITY & FADE-IN
// ============================================
const workFrames = document.querySelectorAll('.work-frame');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add delay based on scroll direction
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 100);
        } else {
            // Optional: remove visible class when out of view for re-animation
            // entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

workFrames.forEach(frame => {
    observer.observe(frame);
});


// ============================================
// LIGHTBOX FOR GALLERY IMAGES
// ============================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryImages = document.querySelectorAll('.gallery-image');

let currentImageIndex = 0;

// Open lightbox when clicking a gallery image
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    }
});

// Navigation buttons
lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
});

lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
});

function updateLightboxImage() {
    const currentImage = galleryImages[currentImageIndex];
    lightboxImage.src = currentImage.src;
    lightboxImage.alt = currentImage.alt;
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    updateLightboxImage();
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// TOUCH GESTURES FOR LIGHTBOX
// ============================================
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            navigateLightbox(1);
        } else {
            navigateLightbox(-1);
        }
    }
}

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================
let isScrolling = false;
let scrollTimeout;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
    }
    
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
    }, 150);
}, { passive: true });

// ============================================
// NAVIGATION LOGO SCROLL TO TOP
// ============================================
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
    navLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// TOUCH GESTURES FOR MOBILE
// ============================================
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    // Vertical swipe detection for potential future enhancements
    // Currently handled by native scroll-snap
}
