//Questão 1 - Fatorial de 10
const calcularFatorial = (fatorial) => {
    let resultado = 1;

    for(let i = fatorial; i > 1; i--)
    {
        resultado *= i;
    }

    return resultado;
}

console.log("10! = " + calcularFatorial(10));

//Questão 2 - Inversor de palavras
const inverterPalavra = (palavra) => {
    let palavraInvertida = "";

    for(let i = palavra.length - 1; i >= 0; i--)
    {
        palavraInvertida += palavra[i];
    }

    return palavraInvertida;
}
console.log(`tryber --> ${inverterPalavra("tryber")}`);

//Questão 3 - Maior e menor palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0], maiorPalavra = "";

for(let i = 0; i < array.length; i++)
{
    if(maiorPalavra.length < array[i].length)
    {
        maiorPalavra = array[i];
    }
    else if(menorPalavra.length > array[i].length)
    {
        menorPalavra = array[i];
    }
}

console.log("Maior Palavra: " + maiorPalavra);
console.log("Menor Palavra: " + menorPalavra);