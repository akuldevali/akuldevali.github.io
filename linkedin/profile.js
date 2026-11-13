'use strict';

const contactDialog = document.querySelector('#contact-dialog');
document.querySelectorAll('[data-contact]').forEach(button => {
  button.addEventListener('click', () => contactDialog.showModal());
});
document.querySelector('#close-contact').addEventListener('click', () => contactDialog.close());
contactDialog.addEventListener('click', event => {
  if (event.target === contactDialog) {
    const rect = contactDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) contactDialog.close();
  }
});

const moreButton = document.querySelector('#more-button');
const moreMenu = document.querySelector('#more-actions');
function closeMenu() {
  moreMenu.hidden = true;
  moreButton.setAttribute('aria-expanded', 'false');
}
moreButton.addEventListener('click', () => {
  moreMenu.hidden = !moreMenu.hidden;
  moreButton.setAttribute('aria-expanded', String(!moreMenu.hidden));
});
document.addEventListener('click', event => {
  if (!event.target.closest('.more-wrap')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !moreMenu.hidden) {
    closeMenu();
    moreButton.focus();
  }
});

let toastTimeout;
function notify(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { toast.hidden = true; }, 4000);
}
document.querySelector('#copy-link').addEventListener('click', async () => {
  closeMenu();
  const url = new URL('./', window.location.href).href;
  try {
    await navigator.clipboard.writeText(url);
    notify('Profile link copied');
  } catch {
    notify('Copy the profile URL from your address bar.');
  }
});
document.querySelector('#print-profile').addEventListener('click', () => {
  closeMenu();
  window.print();
});

const posts = [...document.querySelectorAll('.post')];
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('selected', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    posts.forEach(post => { post.hidden = button.dataset.filter !== 'all' && post.dataset.kind !== button.dataset.filter; });
    const count = posts.filter(post => !post.hidden).length;
    document.querySelector('#filter-status').textContent = `${count} ${count === 1 ? 'post' : 'posts'} shown`;
  });
});

const search = document.querySelector('#section-search');
const sections = [...document.querySelectorAll('main section[id]')];
document.querySelector('.section-search').addEventListener('submit', event => {
  event.preventDefault();
  const query = search.value.trim().toLowerCase();
  const match = query && sections.find(section => section.querySelector('h1, h2').textContent.toLowerCase().includes(query));
  if (!match) {
    document.querySelector('#search-status').textContent = 'Section not found. Try About, Activity, Experience, Education, Projects, or Skills.';
    notify('Try a section such as Experience, Education, or Skills.');
    return;
  }
  const heading = match.querySelector('h1, h2');
  heading.setAttribute('tabindex', '-1');
  heading.focus({ preventScroll: true });
  match.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  history.replaceState(null, '', `#${match.id}`);
  document.querySelector('#search-status').textContent = `Jumped to ${heading.textContent}`;
});
