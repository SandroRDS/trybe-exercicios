const numero = 17;

function isPrime(numero)
{
    if(numero === 1)
    {
        return false;
    }

    for(let i = 3; i < numero; i += 2)
    {
        if(numero%i === 0)
        {
            return false;
        }
    }

    return true;
}

console.log(isPrime(numero));