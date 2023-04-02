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
    let isEven = tamanho % 2 === 0;
    let quantidadeDeEspacosExternos = isEven ? Math.trunc(tamanho/2) - 1 : Math.trunc(tamanho/2); 
    let quantidadeDeEspacosInternos = 0;

    for(let espacosExternos = quantidadeDeEspacosExternos, espacosInternos = quantidadeDeEspacosInternos; espacosExternos >= 0; espacosExternos--, espacosInternos += 2)
    {
        if(espacosExternos > 0)
        {
            piramide += multiplicarCaracteres(" ", espacosExternos);
            piramide += "*"; 
            piramide += multiplicarCaracteres(" ", espacosInternos + (espacosInternos >= 2 && !isEven ? -1 : 0)); 
            piramide += (isEven || espacosInternos > 0 ? "*" : "");
            piramide += multiplicarCaracteres(" ", espacosExternos) 
            piramide += "\n";
        }
        else
        {
            piramide += multiplicarCaracteres("*", tamanho);
        }
    }

    return piramide;
}

console.log(imprimirPiramide(7));