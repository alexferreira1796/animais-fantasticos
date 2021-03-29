import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  const gridNumbers = document.querySelector('.numeros-grid');
  // Funcao para criar a lista de animais
  function createList(data) {
    const element = document.createElement('div');
    element.classList.add('numero-animal');
    element.innerHTML = `<h3>${data.especie}</h3><span data-numero>${data.numero}</span>`;
    gridNumbers.appendChild(element);
  }
  // Funcao asssincrona que busca os dados da API
  async function fetchAnimais(api) {
    try {
      const res = await fetch(api);
      const json = await res.json();
      json.forEach((item) => {
        createList(item);
      });
      initAnimaNumeros();
    } catch (err) {
      console.log(Error(err));
    }
  }
  fetchAnimais('./api/animais.json');
}
