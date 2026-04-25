window.FormHandler = (() => {
  function init({ onResult }) {
    const form = document.querySelector('#destiny-form');
    const nameInput = document.querySelector('#name');
    const birthInput = document.querySelector('#birthdate');

    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = nameInput.value.trim();
      const birthdate = birthInput.value;
      if (!name || !birthdate) return;
      onResult({ name, birthdate });
    });

    return {
      getValues() {
        return { name: nameInput.value.trim(), birthdate: birthInput.value };
      }
    };
  }

  return { init };
})();
