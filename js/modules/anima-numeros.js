export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((item) => {
      const total = +item.innerText;
      const incremento = Math.floor(total / 100); // Valor relativo ao total
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        item.innerText = start;
        if (start > total) {
          item.innerText = total;
          clearInterval(timer);
        }
      }, 30 * Math.random());
    });
  }
  const observerTarget = document.querySelector('.numeros');
  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      animaNumeros();
      observer.disconnect();
    }
  }
  observer = new MutationObserver(handleMutation); // Observador
  observer.observe(observerTarget, { attributes: true }); // Vai observar o elemento o atributo
}
