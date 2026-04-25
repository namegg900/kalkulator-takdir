window.ShareFeature = (() => {
  function init({ getText }) {
    const copyBtn = document.querySelector('#copy');
    copyBtn?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(getText());
        copyBtn.textContent = 'Tersalin ✓';
        setTimeout(() => (copyBtn.textContent = 'Salin Hasil'), 1500);
      } catch {
        copyBtn.textContent = 'Gagal menyalin';
      }
    });
  }

  return { init };
})();
