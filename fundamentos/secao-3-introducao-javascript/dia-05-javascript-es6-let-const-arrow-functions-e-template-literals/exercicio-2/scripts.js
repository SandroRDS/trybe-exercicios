//Questão 1 – Crie uma função que ligue e desligue o motor de um carro
const carro = {ligado: true};
const ligarDesligarMotor = (carro) => carro.ligado ? carro.ligado = false : carro.ligado = true;
console.log('🚀 -> carro:', carro);

//Questão 2 - 2 – Crie uma função que calcule a área de um círculo
const calcularAreaCirculo = raio => Math.PI * raio ** 2;
console.log(calcularAreaCirculo(4));

//Questão 3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase
const longestWord = frase => {
    const arrPalavrasOrdenadas = frase.split(' ').sort((p1, p2) =>  p2.length - p1.length);
    return arrPalavrasOrdenadas[0];
};

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));