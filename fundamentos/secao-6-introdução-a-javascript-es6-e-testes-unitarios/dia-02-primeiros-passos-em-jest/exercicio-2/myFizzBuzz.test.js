const myFizzBuzz = require('./myFizzBuzz');

describe('Testando os casos da função myFizzBuzz', () => {
  test('Verificando se ao passar o número 15, a função retorna o valor "fizzbuzz".', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  
  test('Verificando se ao passar o número 9, a função retorna o valor "fizz".', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  
  test('Verificando se ao passar o número 10, a função retorna o valor "buzz".', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  
  test('Verificando se ao passar o número 17, a função retornar o valor 17', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });
  
  test('Verificando se ao passar nenhum parâmetro, a função retorna o valor false', () => {
    expect(myFizzBuzz()).toBe(false);
  });
});