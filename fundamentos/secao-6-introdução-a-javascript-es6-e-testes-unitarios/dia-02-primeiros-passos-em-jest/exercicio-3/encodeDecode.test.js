const { encode, decode } = require('./encodeDecode');

describe('Testes para as funções encode e decode', () => {
  test('Testando se as variáveis encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('Testando se a função encode converte corretamente vogais em letras', () => {
    const actual =  encode('aeiou');
    const expected = '12345';
    expect(actual).toBe(expected);
  });

  test('Testando se a função decode converte corretamente números em vogais', () => {
    const actual =  decode('12345');
    const expected = 'aeiou';
    expect(actual).toBe(expected);
  });

  test('Testando se as demais letras e números não são convertidos', () => {
    const outerLetters = 'bcdfgh';
    const outerNumbers = '67890';

    expect(encode(outerLetters)).toBe(outerLetters);
    expect(decode(outerNumbers)).toBe(outerNumbers);
  });

  test('Testando se a string retornada pelas funções possui o mesmo número de caracteres que a string de entrada', () => {
    const phrase1 = 'Hello World!';
    const phrase2 = 'H2ll4 W4rld!';

    expect(encode(phrase1)).toHaveLength(phrase1.length);
    expect(decode(phrase2)).toHaveLength(phrase2.length);
  });
});