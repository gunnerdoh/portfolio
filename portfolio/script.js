document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const tabs = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabs.forEach(tab => {
        tab.style.display = tab.id === `tab-${target}` ? '' : 'none';
      });
    });
  });
});
