import { drawChart } from "./D3.js";

function generarTaulaMultiplicar(numero) {
  const taula = [];

  for (let i = 0; i <= 10; i++) {
    taula.push({
      nom: `${numero} x ${i}`,
      valor: numero * i,
    });
  }

  return taula;
}
const data = generarTaulaMultiplicar(5);

drawChart(data, "#grafic");
