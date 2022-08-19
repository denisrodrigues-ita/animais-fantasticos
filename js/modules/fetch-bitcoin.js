export default function initFetchBitcoin() {
  async function fetchbtc() {
    try {
      const btcUrl = await fetch('https://blockchain.info/ticker');
      const btcJson = await btcUrl.json();
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / btcJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchbtc();
}
