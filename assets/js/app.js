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
