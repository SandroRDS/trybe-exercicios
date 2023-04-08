let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Questão 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
console.log("Questão 1: \n");
const adicionarPropriedade = (obj, chave, valor) => obj[chave] = valor;
adicionarPropriedade(lesson2, 'turno', 'noite');

// Questão 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log("\n\nQuestão 2: \n");
const listarChaves = obj => Object.keys(obj).forEach(chave => console.log(chave));
listarChaves(lesson3);

// Questão 3 - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
console.log("\n\nQuestão 3: \n");
const retornarTamanho = obj => console.log(Object.keys(obj).length);
retornarTamanho(lesson3);

// Questão 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
console.log("\n\nQuestão 4: \n");
const listarValores = obj => Object.values(obj).forEach(valor => console.log(valor));
listarValores(lesson3);

// Questão 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3.
console.log("\n\nQuestão 5: \n");
const allLessons = Object.assign({}, {lesson1: lesson1}, {lesson2, lesson2}, {lesson3, lesson3});
console.log('🚀 -> allLessons:', allLessons);

// Questão 6 - Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
console.log("\n\nQuestão 6: \n");
const contarNumeroDeEstudantes = () => Object.values(allLessons).reduce((acc, obj) => acc + obj.numeroEstudantes, 0);
console.log('🚀 -> contarNumeroDeEstudantes:', contarNumeroDeEstudantes());

// Questão 7 - Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.
console.log("\n\nQuestão 7: \n");
const getValueByNumber = (obj, num) => {
    const chave = Object.keys(obj)[num];
    return obj[chave];
};

console.log('🚀 -> getValueByNumber:', getValueByNumber(lesson1, 0));

// Questão 8 - Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela.
console.log("\n\nQuestão 8: \n");
const verifyPair = (obj, chave, valor) => obj[chave] === valor; 
console.log('🚀 -> verifyPair: ', verifyPair(lesson3, 'materia', 'Matemática'));