//Crie uma função chamada arrayOfNumbers, que receberá a variável vector como parâmetro.
//Por meio de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado pela função no fim.
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (matriz) => {
    const numerosPares = [];
    
    for(arr of vector) {
        for(value of arr) {
            if(value % 2 === 0) {
                numerosPares.push(value);
            }
        }
    }

    return numerosPares;
};

console.log(arrayOfNumbers(vector));