function multiplicarCaracteres(caractere, quantidade)
{
    let caracteres = "";

    for(let i = 1; i <= quantidade; i++)
    {
        caracteres += caractere;
    }

    return caracteres;
}

function imprimirPiramide(tamanho)
{
    let piramide = "";
    let quantidadeDeEspacos, quantidadeDeAsteriscos;

    if(tamanho % 2 === 0)
    {
        quantidadeDeAsteriscos = 2;
        quantidadeDeEspacos    = tamanho/2 - 1;
    }
    else
    {
        quantidadeDeAsteriscos = 1;
        quantidadeDeEspacos    = Math.trunc(tamanho/2);
    }

    for(let espacos = quantidadeDeEspacos, asteriscos = quantidadeDeAsteriscos; espacos >= 0; espacos--, asteriscos += 2)
    {
        piramide += multiplicarCaracteres(" ", espacos) + multiplicarCaracteres("*", asteriscos) + multiplicarCaracteres(" ", espacos) + "\n";   
    }

    return piramide;
}

console.log(imprimirPiramide(9));