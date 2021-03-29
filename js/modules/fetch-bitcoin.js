export default function initFetchBitcon() {
  // https://blockchain.info/ticker
  function fetchBitcoin(url) {
    const price = document.querySelector('.btc-preco');
    fetch(url, { method: 'GET' }).then((response) => response.json()).then((json) => {
      price.innerText = (1000 / json.BRL.sell).toFixed(4); // Mil reais de doacao
    }).catch((e) => console.log(Error(e)));
  }
  fetchBitcoin('https://blockchain.info/ticker');
}
