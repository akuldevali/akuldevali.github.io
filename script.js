// ============================================================
// Control Plane — interactivity
// ============================================================
document.documentElement.classList.add('js');

// ------------------------------------------------------------
// Uptime counter (career start: Aug 2022)
// ------------------------------------------------------------
(function () {
    const el = document.getElementById('uptime');
    if (!el) return;
    const start = new Date(2022, 7, 1); // Aug 2022
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    months %= 12;
    el.textContent = years + 'y' + (months ? ' ' + months + 'm' : '');
})();

// ------------------------------------------------------------
// Scroll reveal
// ------------------------------------------------------------
(function () {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('in'));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(el => io.observe(el));
})();

// ------------------------------------------------------------
// Active nav link highlight
// ------------------------------------------------------------
(function () {
    const links = document.querySelectorAll('.sb-link');
    const map = new Map();
    links.forEach(link => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) map.set(target, link);
    });
    if (!map.size || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                map.get(e.target).classList.add('active');
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px' });
    map.forEach((_, section) => io.observe(section));
})();
