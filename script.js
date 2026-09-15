const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '76px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '25px 5vw';
    nav.style.background = '#050608';
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'flex-start';
    nav.style.borderBottom = '1px solid rgba(255,255,255,.11)';
  }
});

const form = document.getElementById('contactForm');
const status = document.querySelector('.form-status');

form?.addEventListener('submit', async (e) => {
  if (form.action.includes('YOUR_FORM_ID')) {
    e.preventDefault();
    status.textContent = 'Connect a Formspree endpoint in index.html to activate the form.';
    return;
  }

  e.preventDefault();
  status.textContent = 'Sending…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      status.textContent = 'Message received. We’ll be in touch.';
    } else {
      status.textContent = 'Something went wrong. Please email hello@marketme.agency.';
    }
  } catch {
    status.textContent = 'Something went wrong. Please email hello@marketme.agency.';
  }
});

// Subtle scroll-based hero motion.
window.addEventListener('scroll', () => {
  const orb = document.querySelector('.hero-orbit');
  if (orb) orb.style.transform = `translateY(${window.scrollY * 0.08}px)`;
}, { passive: true });
