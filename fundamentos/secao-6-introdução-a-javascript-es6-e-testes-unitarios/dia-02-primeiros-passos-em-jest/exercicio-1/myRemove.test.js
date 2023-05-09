const myRemove = require('myRemove');

describe('Testando se a função myRemove apresenta o comportamento esperado', () => {
  test('Verifica se ao passar os parâmetros [1, 2, 3, 4] e 3, irá ser retornado o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verifica se ao passar os parâmetros [1, 2, 3, 4] e 3, não irá ser retornado o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifica se ao passar os parâmetros [1, 2, 3, 4] e 5, irá ser retornado o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});