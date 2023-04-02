let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function ordenarArray(arr, option = 1)
{
    const arrayLastIndex = arr.length - 1;

    for(let loopNumber = 1; loopNumber <= arrayLastIndex; loopNumber++)
    {
        for(let index = 0; index <= arrayLastIndex - loopNumber; index++)
        {
            const valueCurrentPosition  = arr[index];
            const valueNextPosition     = arr[index + 1];

            if(option === 1)
            {
                if(valueCurrentPosition > valueNextPosition)
                {
                    arr[index + 1] = valueCurrentPosition;
                    arr[index]     = valueNextPosition;
                }
            }
            else
            {
                if(valueCurrentPosition < valueNextPosition)
                {
                    arr[index + 1] = valueCurrentPosition;
                    arr[index]     = valueNextPosition;
                }
            }
        }
    }

    return arr;
}

//Questão 1 - Ordene o array numbers em ordem crescente e imprima seus valores.
console.log("Array Ordenado em Ordem Crescente: " + ordenarArray([...numbers]));

// Questão 2 - Ordene o array numbers em ordem decrescente e imprima seus valores.
console.log("Array Ordenado em Ordem Decrescente: " + ordenarArray([...numbers], 2));

//Questão 3 - Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja valor seguinte, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.
function multiplicarPosicoes(arr)
{
    const newArr = [];
    const lastIndex = arr.length - 1;

    for(let index = 0; index < lastIndex; index++)
    {
        const newValue = index < lastIndex ? arr[index] * arr[index + 1] : arr[index] * 2;
        newArr.push(newValue);
    }

    return newArr;
}

console.log("Posições multiplicadas: " + multiplicarPosicoes([...numbers]));