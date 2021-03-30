export default class ScrollSuave {
  constructor(search, options) {
    this.linksInternos = document.querySelectorAll(search);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  handleScroll() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', (event) => {
        this.scrollToSection(event);
      });
    });
  }

  init() {
    this.handleScroll();
    return this;
  }
}
