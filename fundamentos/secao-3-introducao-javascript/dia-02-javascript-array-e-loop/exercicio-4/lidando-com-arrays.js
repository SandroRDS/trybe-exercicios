let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Questão 1 - Percorra o array imprimindo todos os valores contidos nele com a função console.log().
numbers.forEach((numero, indice) => console.log(`Posição ${indice}: ${numero}`));

//Questão 2 - Some todos os valores contidos no array e imprima o resultado.
let soma = numbers.reduce((acc, numero) => acc + numero, 0);
console.log("Soma das Posições do Array: ", soma);

//Questão 3 - Calcule e imprima a média aritmética dos valores contidos no array.
let mediaAritmetica = soma / numbers.length;
console.log("Media Aritmética do Array", mediaAritmetica);

//Questão 4 - Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”
console.log(mediaAritmetica > 20 ? "Valor maior que 20" : "Valor menor ou igual a 20");

//Questão 5 - Utilizando for, descubra o maior valor contido no array e imprima-o.
let maiorValor = 0;
for(let i = 0; i < numbers.length; i++)
{
    maiorValor = maiorValor < numbers[i] ? numbers[i] : maiorValor; 
}
console.log("Maior valor do Array: " + maiorValor);

//Questão 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let quantidadeValoresImpares = numbers.reduce((quantidadeImpares, numero) => !(numero%2===0) ? quantidadeImpares + 1 : quantidadeImpares, 0);
console.log(quantidadeValoresImpares > 0 ? `Quantidade de Valores Ímpares: ${quantidadeValoresImpares}`: "Nenhum valor ímpar encontrado");

//Questão 7 - Utilizando for, descubra o menor valor contido no array e imprima-o.
let menorValor = Infinity;
for(let i = 0; i < numbers.length; i++)
{
    menorValor = menorValor > numbers[i] ? numbers[i] : menorValor; 
}
console.log("Menor valor do Array: " + menorValor);

//Questão 8 - Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
let novoArray = [];
for(let i = 0; i < 25; i++)
{
    novoArray.push(i+1);
}
console.log("Novo Array de 1 a 25:", novoArray);

//Questão 9 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
novoArray.forEach((numero, indice) => console.log(`Posição ${indice}: ${numero} / 2 = ${numero/2}`));