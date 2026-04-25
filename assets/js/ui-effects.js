window.UIEffects = (() => {
  function applyDefaultTheme() {
    document.documentElement.setAttribute('data-theme', 'ocean');
  }

  function sparkle(el) {
    el.animate(
      [
        { transform: 'scale(0.98)', opacity: 0.6 },
        { transform: 'scale(1)', opacity: 1 }
      ],
      { duration: 300, easing: 'ease-out' }
    );
  }

  return { applyDefaultTheme, sparkle };
})();
