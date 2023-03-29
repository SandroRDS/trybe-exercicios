const salarioBruto = 3000;
let aliquotaINSS, valorIR;

//INSS
if(salarioBruto <= 1556.94)
{
    aliquotaINSS = 0.08 * salarioBruto;
}
else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92)
{
    aliquotaINSS = 0.09 * salarioBruto;
}
else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82)
{
    aliquotaINSS = 0.11 * salarioBruto;
}
else
{
    aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

//IR
if(salarioBase <= 1903.98)
{
    valorIR = 0;
}
else if(salarioBase > 1903.98 && salarioBase <= 2826.65)
{
    valorIR = 0.075 * salarioBase - 142.8;
}
else if(salarioBase > 2826.65 && salarioBase <= 3751.05)
{
    valorIR = 0.15 * salarioBase - 354.8;
}
else if(salarioBase > 3751.05 && salarioBase <= 4664.68)
{
    valorIR = 0.225 * salarioBase - 636.13;
}
else
{
    valorIR = 0.275 * salarioBase - 869.36;
}

salarioLiquido = (salarioBase - valorIR).toFixed(2);
console.log("🚀 ~ file: questao11.js:47 ~ salarioLiquido:", salarioLiquido);