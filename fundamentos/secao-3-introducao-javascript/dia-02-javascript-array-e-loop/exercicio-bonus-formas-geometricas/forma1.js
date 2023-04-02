function multiplicarCaracteres(caractere, quantidade)
{
    let caracteres = "";

    for(let i = 1; i <= quantidade; i++)
    {
        caracteres += caractere;
    }

    return caracteres;
}

function imprimirRetangulo(tamanho)
{
    let retangulo = "";

    for(let linha = 1; linha <= tamanho; linha++)
    {
        retangulo += multiplicarCaracteres("*", tamanho) + "\n";
    }

    return retangulo;
}

console.log(imprimirRetangulo(5));