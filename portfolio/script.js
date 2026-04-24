document.addEventListener('DOMContentLoaded', () => {

  // ── Copy email to clipboard ──────────────────────────────────────────────
  document.querySelectorAll('.hero-link-copy, .hero-email-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.copy).then(() => {
        const original = btn.getAttribute('aria-label');
        btn.setAttribute('aria-label', 'Copied!');
        btn.classList.add('copied');
        setTimeout(() => {
          btn.setAttribute('aria-label', original);
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });


  // ── Lock work section height so it never shrinks when rows are hidden ────
  const workSection = document.getElementById('work');
  if (workSection) {
    workSection.style.minHeight = workSection.offsetHeight + 'px';
  }

  // ── Work tag filtering ───────────────────────────────────────────────────
  const activeTags = new Set();

  document.querySelectorAll('.tag[data-tag]').forEach(tag => {
    tag.addEventListener('click', () => {
      const tagName = tag.dataset.tag;

      if (activeTags.has(tagName)) {
        activeTags.delete(tagName);
        document.querySelectorAll(`.tag[data-tag="${tagName}"]`).forEach(t => {
          t.classList.remove('active');
        });
      } else {
        activeTags.add(tagName);
        document.querySelectorAll(`.tag[data-tag="${tagName}"]`).forEach(t => {
          t.classList.add('active');
        });
      }

      document.querySelectorAll('.work-row').forEach(row => {
        if (row.classList.contains('work-more-row')) return;

        if (activeTags.size === 0) {
          row.style.display = '';
        } else {
          const rowTags = row.dataset.tags ? row.dataset.tags.split(' ') : [];
          const hasMatch = [...activeTags].some(t => rowTags.includes(t));
          row.style.display = hasMatch ? '' : 'none';
        }
      });
    });
  });

});
