// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função para contar o número de estudantes que assistiram às aulas de Matemática.
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

const allLessons = Object.assign({}, {lesson1: lesson1}, {lesson2, lesson2}, {lesson3, lesson3});

const contabilizarPresenca = (materia) => {
    const lessons = Object.values(allLessons);
    let lessonsSelected = lessons.filter(objLesson => objLesson.materia === materia, 0);
    return lessonsSelected.reduce((acc, objLesson) => acc + objLesson.numeroEstudantes, 0);
}

console.log(contabilizarPresenca('Matemática'));

// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função que retorne um objeto que represente o relatório da pessoa instrutora, as aulas ministradas e o número total de estudantes.
const createReport = (allLessons, name) => {
    const objReport = {};
    const lessonsTaught = Object.values(allLessons).filter(objLesson => objLesson.professor === name);

    objReport['professor'] = name;
    objReport['aulas'] = lessonsTaught.map(objLesson => objLesson.materia);
    objReport['estudantes'] = lessonsTaught.reduce((acc, objLesson) => acc + objLesson.numeroEstudantes, 0);
    
    return objReport;
};

console.log(createReport(allLessons, 'Maria Clara'));