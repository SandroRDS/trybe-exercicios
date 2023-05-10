const apostarNumero = (numeroApostado, checarAposta) => {
  const limite = 5;
  const numeroSorteado = Math.round(Math.random() * limite);
  return checarAposta(numeroApostado, numeroSorteado);
};

const checarAposta = (numApostado, numSorteado) => {
  return numApostado === numSorteado ? 'Parabéns, você ganhou!' : 'Tente novamente';
};

console.log(apostarNumero(3, checarAposta));