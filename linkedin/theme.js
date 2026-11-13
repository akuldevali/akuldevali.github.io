/* Set the theme before styles load so returning visitors avoid a light flash. */
(() => {
  'use strict';
  const key = 'akul-profile-theme';
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch { /* The toggle still works when browser storage is unavailable. */ }

  function applyTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = dark ? '#11161b' : '#f4f2ee';
    const button = document.querySelector('#theme-toggle');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(dark));
      button.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  systemTheme.addEventListener('change', event => {
    if (!preference) applyTheme(event.matches ? 'dark' : 'light');
  });
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(root.dataset.theme);
    document.querySelector('#theme-toggle').addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(preference);
      try { localStorage.setItem(key, preference); } catch { /* Retain the in-tab choice. */ }
    });
  }, { once: true });
})();
