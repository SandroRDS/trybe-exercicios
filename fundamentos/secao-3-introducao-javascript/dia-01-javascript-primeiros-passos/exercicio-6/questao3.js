const [a, b, c] = [502, 400, 200]
let resultado;

if(a > b)
{
    if(a > c)
    {
        resultado = "Valor A é o maior de todos";
    }
    else
    {
        resultado = "Valor C é o maior de todos";
    }
}
else 
{
    if(b > c)
    {
        resultado = "Valor B é o maior de todos";
    }
    else
    {
        resultado = "Valor C é o maior de todos";
    }
}
    

console.log(resultado);