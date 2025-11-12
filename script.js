document.querySelectorAll('.ramo').forEach(el => {
  el.addEventListener('click', () => {
    if (el.classList.contains('locked')) return;
    el.classList.toggle('aprobado');
    updateUnlocked();
  });
});

function updateUnlocked() {
  document.querySelectorAll('.ramo').forEach(el => {
    const prereqs = el.dataset.prereqs.split(',').filter(s => s.trim());
    if (prereqs.length === 0) {
      el.classList.remove('locked');
    } else {
      const ok = prereqs.every(id => document.getElementById(id)?.classList.contains('aprobado'));
      if (ok) {
        el.classList.remove('locked');
      } else {
        el.classList.add('locked');
        el.classList.remove('aprobado');
      }
    }
  });
}

updateUnlocked();
