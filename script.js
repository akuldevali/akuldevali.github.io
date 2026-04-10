// ============================================================
// Theme
// ============================================================
const html = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);

themeBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// ============================================================
// Mobile menu
// ============================================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ============================================================
// Navbar scroll + active link
// ============================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 50);
    navbar.classList.toggle('shrunk',   y > 120);
    highlightNav();
}, { passive: true });

function highlightNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    links.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
}

// ============================================================
// Smooth scroll (offset for fixed nav)
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const navH = navbar.offsetHeight;
        window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
    });
});

// ============================================================
// Scroll reveal (IntersectionObserver)
// ============================================================
const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
// also catch any standalone variant classes added without base .reveal
document.querySelectorAll('.from-left, .from-right, .from-scale, .from-pop').forEach(el => {
    if (!el.classList.contains('reveal')) io.observe(el);
});

// ============================================================
// Profile photo — show on load, keep placeholder on error
// ============================================================
const profilePhoto = document.getElementById('profilePhoto');
if (profilePhoto) {
    const tryShow = () => {
        if (profilePhoto.complete && profilePhoto.naturalWidth > 0) {
            profilePhoto.classList.add('loaded');
        }
    };
    profilePhoto.addEventListener('load', tryShow);
    profilePhoto.addEventListener('error', () => { /* placeholder stays visible */ });
    tryShow(); // already cached
}

// ============================================================
// Nav avatar — show on load
// ============================================================
const navAvatar = document.getElementById('navAvatar');
if (navAvatar) {
    navAvatar.addEventListener('load', () => navAvatar.classList.add('loaded'));
    if (navAvatar.complete && navAvatar.naturalWidth > 0) navAvatar.classList.add('loaded');
}

// ============================================================
// Project images — show on load, keep placeholder on error
// ============================================================
document.querySelectorAll('.proj-img img').forEach(img => {
    const show = () => { if (img.naturalWidth > 0) img.classList.add('loaded'); };
    img.addEventListener('load', show);
    img.addEventListener('error', () => { img.style.display = 'none'; });
    show();
});
