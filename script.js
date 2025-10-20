
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const y = document.querySelector('#year'); if (y) y.textContent = new Date().getFullYear();

  // Sticky header style on scroll
  const bar = document.querySelector('.sitebar');
  const onScroll = () => {
    if (window.scrollY > 10) bar?.classList.add('scrolled');
    else bar?.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Drawer
  const drawer = document.querySelector('.drawer');
  document.querySelector('.menu-btn')?.addEventListener('click', () => drawer?.classList.add('open'));
  document.querySelector('.close')?.addEventListener('click', () => drawer?.classList.remove('open'));
  drawer?.addEventListener('click', (e) => { if (e.target === drawer) drawer.classList.remove('open'); });

  // Contact mailto handler
  const form = document.querySelector('#contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const name = (d.get('name') || '').toString().trim();
    const email = (d.get('email') || '').toString().trim();
    const phone = (d.get('phone') || '').toString().trim();
    const message = (d.get('message') || '').toString().trim();
    if (!name || !email || !message) { alert('Please fill name, email, and message.'); return; }
    const subject = encodeURIComponent('New Inquiry - Drewscom');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`);
    window.location.href = `mailto:awmontgomery@gmail.com?subject=${subject}&body=${body}`;
  });
});
