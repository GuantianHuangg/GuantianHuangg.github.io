(() => {
  const toggle = document.querySelector('.masthead__toggle');
  const nav = document.querySelector('.greedy-nav');
  const links = [...document.querySelectorAll('.greedy-nav a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);

  document.querySelector('#year').textContent = new Date().getFullYear();

  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });

  nav?.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    toggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  });

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!active) return;
      links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${active.target.id}`));
    }, { rootMargin: '-20% 0px -68% 0px', threshold: [0.05, 0.3] });
    sections.forEach((section) => observer.observe(section));
  }
})();
