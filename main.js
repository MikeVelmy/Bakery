// The Good Baker · main.js

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll state + subtle hero parallax
const header = document.getElementById('siteHeader');
const heroBg = document.getElementById('heroBg');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  if (heroBg) heroBg.style.transform = 'translateY(' + (window.scrollY * 0.18) + 'px)';
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => io.observe(el));

// Steam particles rising from the hero
function launchSteam(el, delay) {
  function loop() {
    el.style.opacity = 0;
    el.style.transform = 'translateY(0) translateX(0) scale(1)';
    requestAnimationFrame(() => {
      el.style.transition = 'transform 4.2s ease-out, opacity 4.2s ease-out';
      el.style.opacity = 0.5;
      el.style.transform = 'translateY(-120px) translateX(' + (Math.random() * 30 - 15) + 'px) scale(2.4)';
    });
    setTimeout(() => { el.style.opacity = 0; }, 3400);
  }
  setTimeout(() => { loop(); setInterval(loop, 4400); }, delay);
}
['s1', 's2', 's3'].forEach((id, i) => {
  const el = document.getElementById(id);
  el.style.left = (48 + i * 3) + '%';
  el.style.bottom = '8%';
  el.style.height = (18 + i * 4) + 'px';
  launchSteam(el, i * 900);
});

// Open/closed status (Accra = GMT, no DST)
function updateStatus() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const accra = new Date(utc); // GMT+0
  const day = accra.getDay();
  const hour = accra.getHours() + accra.getMinutes() / 60;
  const badge = document.getElementById('statusBadge');
  const text = document.getElementById('statusText');
  const isOpenHour = hour >= 7;
  const open = isOpenHour;
  badge.classList.toggle('open', open);
  badge.classList.toggle('closed', !open);
  text.textContent = open
    ? 'Open now · Closes midnight'
    : 'Closed now · Opens 7am';

  document.querySelectorAll('#hoursTable tr').forEach(tr => {
    tr.classList.toggle('today', String(day) === tr.getAttribute('data-day'));
  });
}
updateStatus();

// Graceful fallback if an external image can't load
document.querySelectorAll('img[loading="lazy"], .story-img img, .menu-photos img').forEach(img => {
  img.addEventListener('error', () => {
    const holder = img.closest('figure, .story-img, .menu-photos');
    if (holder) holder.style.setProperty('background', 'linear-gradient(140deg,#8F5A0E,#241811)');
    img.style.opacity = '0';
  }, { once: true });
});
(() => {
  const test = new Image();
  test.onerror = () => {
    document.getElementById('heroBg').style.backgroundImage =
      'linear-gradient(180deg, rgba(24,17,11,.45) 0%, rgba(24,17,11,.5) 45%, rgba(20,14,10,.95) 100%), linear-gradient(140deg,#8F5A0E,#241811)';
  };
  test.src = 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=100&q=10';
})();
