// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
const converterRomanosParaDecimal = numeroRomano => {
    const objConversao = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const arrNumeroRomano = numeroRomano.split('');
    const numeroDecimal = arrNumeroRomano.reduce((acc, numero, indice, arr) => {
        const numeroSucessor = objConversao[arr[indice + 1]];
        let numeroAtual = objConversao[numero];
        
        if(numeroSucessor > numeroAtual) {
            numeroAtual *= -1;
        }

        return acc + numeroAtual;
    }, 0);

    return numeroDecimal;
};

console.log(converterRomanosParaDecimal('MCCCXCVII'));