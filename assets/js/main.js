(async function bootstrap() {
  const predictionEl = document.querySelector('#prediction');
  const resultSection = document.querySelector('#result');
  const resultMeta = document.querySelector('#result-meta');
  const testimonialsEl = document.querySelector('#testimonials');

  let lastText = '';
  UIEffects.applyDefaultTheme();

  FormHandler.init({
    onResult({ name, birthdate }) {
      const text = DestinyEngine.makePrediction(name, birthdate);
      lastText = `${name}: ${text}`;
      predictionEl.textContent = text;
      resultMeta.textContent = `Dihitung untuk ${name} (${birthdate})`;
      resultSection.classList.remove('hidden');
      UIEffects.sparkle(resultSection);
    }
  });

  ShareFeature.init({ getText: () => lastText || predictionEl.textContent });

  try {
    const res = await fetch('assets/data/testimonials.json');
    const data = await res.json();
    testimonialsEl.innerHTML = data.items.map((item) => `<li>“${item.quote}” — ${item.name}</li>`).join('');
  } catch {
    testimonialsEl.innerHTML = '<li>Testimoni lagi loading di dimensi lain.</li>';
  }
})();
