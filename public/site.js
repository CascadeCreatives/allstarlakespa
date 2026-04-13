
function toggleMob() {
  const m = document.getElementById('mobMenu');
  if (!m) return;
  const open = m.classList.toggle('open');
  const btn = document.querySelector('.ham');
  if (btn) btn.setAttribute('aria-expanded', String(open));
}
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const m = document.getElementById('mobMenu');
    if (!m) return;
    if (!m.contains(e.target) && !e.target.closest('.ham')) m.classList.remove('open');
  });
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a, .mob a').forEach(a => {
    const href = (a.getAttribute('href') || '').replace(/\/$/, '');
    if (href === path || (path === '/' && href === '/') || (href.length > 1 && path.startsWith(href))) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
});
