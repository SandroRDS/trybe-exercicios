const data = require('./data');

const expectedResult = 'Duna';
const smallerName = () => {
  const nameBook = data.reduce((menorNome, livroAtual) => {
    return menorNome.name.length > livroAtual.name.length ? livroAtual : menorNome;
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook.name;
}
console.log(smallerName());