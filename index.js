let distanciaAnosLuz = Number(prompt("Qual a distância ?"))

let opcaoEscolhida = Number(prompt("Qual unidade deseja converter?\n1.Parsec(pc)\n2. Unidade Astronômica (AU)" + "\n3. Quilômetros (km)\n\n(Digite o número da opcao desejada)"))

let unidadeEscolhida
let distanciaConvertida

switch (opcaoEscolhida) {
  case 1:
      unidadeEscolhida = "Parsec"
      distanciaConvertida = distanciaAnosLuz * 0.306601
    break;
  case 2:
      unidadeEscolhida = "Unidade Astronômica"
      distanciaConvertida = distanciaAnosLuz * 63241.1
    break;
  case 3:
      unidadeEscolhida = "Quilômetros "
      distanciaConvertida = distanciaAnosLuz * 9.5 * Math.pow(10, 2)
    break;

  default:
    unidadeEscolhida = "Unidade não identificada"
    distanciaConvertida = "Conversão fora do escopo"
    break;
}

document.write(`Distancia em anos de luz: 
${distanciaAnosLuz}<br/>
 ${unidadeEscolhida} 
 ${distanciaConvertida}`
 )