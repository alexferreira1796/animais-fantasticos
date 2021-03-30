export default class initAnimaNumeros {
  constructor(numeros, target) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(target);
    this.className = 'ativo';

    // bindo o this do objeto ao this da mutacao
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento com numero em seu texto
  // incrementa a partir de zero até o numero final
  static incrementaNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100); // Valor relativo ao total
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 30 * Math.random());
  }

  // Ativa incrementar número para cada
  // número selecionado no dom
  animaNumeros() {
    this.numeros.forEach((item) => this.constructor.incrementaNumero(item));
  }

  // Funcao ocorrer quuando a mutacao ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.className)) {
      this.animaNumeros();
      this.observer.disconnect();
    }
  }

  // Adiciona o MuutationObserver para verificar
  // qando a classe ativo é adicionada ao element target
  addMutationObserver() {
    // Observador
    this.observer = new MutationObserver(this.handleMutation);
    // Vai observar o elemento o atributo
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
