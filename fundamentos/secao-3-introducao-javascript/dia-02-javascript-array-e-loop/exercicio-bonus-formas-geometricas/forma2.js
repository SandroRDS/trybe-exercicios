function multiplicarCaracteres(caractere, quantidade)
{
    let caracteres = "";

    for(let i = 1; i <= quantidade; i++)
    {
        caracteres += caractere;
    }

    return caracteres;
}

function imprimirTrianguloRetangulo(tamanho)
{
    let triangulo = ""; 

    for(let linha = 1; linha <= tamanho; linha++)
    {
        triangulo += multiplicarCaracteres("*", linha) + "\n";
    }

    return triangulo;
}

console.log(imprimirTrianguloRetangulo(5));