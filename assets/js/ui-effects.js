window.UIEffects = (() => {
  function randomTheme() {
    const themes = ['sunrise', 'ocean'];
    const chosen = themes[Math.floor(Math.random() * themes.length)];
    document.documentElement.setAttribute('data-theme', chosen);
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

  return { randomTheme, sparkle };
})();
