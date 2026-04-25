(async function bootstrap() {
  const predictionEl = document.querySelector('#prediction');
  const resultSection = document.querySelector('#result');
  const resultMeta = document.querySelector('#result-meta');
  const rerollBtn = document.querySelector('#reroll');
  const testimonialsEl = document.querySelector('#testimonials');

  let lastText = '';

  UIEffects.randomTheme();

  const formApi = FormHandler.init({
    onResult({ name, birthdate }) {
      const text = DestinyEngine.makePrediction(name, birthdate);
      lastText = `${name}: ${text}`;
      predictionEl.textContent = text;
      resultMeta.textContent = `Dihitung untuk ${name} (${birthdate})`;
      resultSection.classList.remove('hidden');
      UIEffects.sparkle(resultSection);
    }
  });

  rerollBtn?.addEventListener('click', () => {
    const { name, birthdate } = formApi.getValues();
    if (!name || !birthdate) return;
    const remix = `${name}-${Date.now()}`;
    predictionEl.textContent = DestinyEngine.makePrediction(remix, birthdate);
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
