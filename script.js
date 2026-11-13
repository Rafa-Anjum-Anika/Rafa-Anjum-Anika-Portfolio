// ==========================================================
// Academic Portfolio – Rafa Anjum Anika
// Functional JavaScript: mobile nav, smooth scroll, active link
// ==========================================================

(function () {
  'use strict';

  // ---- Mobile Navigation ----
  const toggle = document.querySelector('.navbar__toggle');
  const list = document.querySelector('#primary-nav');
  const links = list ? list.querySelectorAll('.navbar__link') : [];

  if (toggle && list) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      list.classList.toggle('open');
    });
  }

  // Close mobile nav when a link is clicked
  if (links.length) {
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (list.classList.contains('open')) {
          list.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // ---- Smooth Scroll & Active Link Highlight ----
  const sections = document.querySelectorAll('section[id]');

  const activateLink = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 80;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        // Remove active from all links
        const allLinks = document.querySelectorAll('.navbar__link');
        allLinks.forEach(l => l.classList.remove('active'));
        // Add active to matching link
        const matchingLink = document.querySelector(`.navbar__link[href="#${sectionId}"]`);
        if (matchingLink) matchingLink.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', activateLink);
  activateLink(); // run on load

  // ---- FocusVisible for accessibility ----
  if (toggle) {
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();