export default function fetchBitcon(url, target) {
  const price = document.querySelector(target);
  fetch(url, { method: 'GET' }).then((response) => response.json()).then((json) => {
    price.innerText = (1000 / json.BRL.sell).toFixed(4); // Mil reais de doacao
  }).catch((e) => console.log(Error(e)));
}
