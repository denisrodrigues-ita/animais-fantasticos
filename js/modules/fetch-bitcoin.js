export default function fetchBitcoin(url, target) {
  async function fetchbtc() {
    try {
      const btcUrl = await fetch(url);
      const btcJson = await btcUrl.json();
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / btcJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchbtc();
}
