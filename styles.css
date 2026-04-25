const pages = ['home','about','construction','medicals','ohs','softskills','operator','contact'];

function navigate(page) {
  pages.forEach(p => {
    document.getElementById('page-' + p).classList.remove('active');
    const link = document.querySelector('[data-page="' + p + '"]');
    if (link) link.classList.remove('active');
  });
  const el = document.getElementById('page-' + page);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const activeLink = document.querySelector('[data-page="' + page + '"]');
  if (activeLink) activeLink.classList.add('active');
  history.replaceState(null, '', '#' + page);
}

// On load, check hash
const hash = window.location.hash.replace('#', '');
navigate(pages.includes(hash) ? hash : 'home');

// ── Mobile nav toggle ────────────────────────────────────────────
function toggleNav() {
  const nav = document.getElementById('nav');
  const links = document.querySelector('.nav-links');
  nav.classList.toggle('nav-mobile-open');
  links.classList.toggle('open');
}

// Close mobile nav when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      const nav = document.getElementById('nav');
      const links = document.querySelector('.nav-links');
      nav.classList.remove('nav-mobile-open');
      links.classList.remove('open');
    });
  });
});
