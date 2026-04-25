window.DestinyEngine = (() => {
  const absurdEvents = [
    'menikah dengan toaster edisi terbatas',
    'mendirikan startup konsultasi bahasa alien',
    'menjadi ketua RT galaksi mini',
    'viral karena review kerupuk antar dimensi',
    'diundang jadi juri lomba nyanyi untuk tanaman'
  ];

  const places = ['di halte bus', 'di minimarket 24 jam', 'di planetarium', 'di rooftop kosan', 'di festival mie'];

  function hash(value) {
    return [...value].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }

  function makePrediction(name, birthdate) {
    const seed = hash(`${name}-${birthdate}`);
    const age = 21 + (seed % 27);
    const event = absurdEvents[seed % absurdEvents.length];
    const place = places[seed % places.length];
    return `Kamu akan ${event} pada usia ${age} tahun, dan semuanya bermula ${place}.`;
  }

  return { makePrediction };
})();
