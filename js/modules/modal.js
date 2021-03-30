export default class initModal {
  constructor() {
    this.botaoAbrir = document.querySelector('[data-modal="abrir"]');
    this.botaoFechar = document.querySelector('[data-modal="fechar"]');
    this.containerModal = document.querySelector('[data-modal="container"]');
    this.className = 'ativo';
    this.eventModal = this.eventModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle(this.className);
  }

  eventModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar no lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // Adicionabndo o evento
  addEventModal() {
    this.botaoAbrir.addEventListener('click', this.eventModal);
    this.botaoFechar.addEventListener('click', this.eventModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal();
    }
    return this;
  }
}
