const validarDados = (name, age) => {
  if (!(name && age)) throw new Error('Todas as informações são necessárias');
  if (typeof name !== 'string' || typeof age !== 'number') throw new Error('Dados inválidos');
}

const verificarMaioridade = (age) => {
  if(age < 18) throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
}

const studantRegister = (name, age) => {
  try {
    validarDados(name, age);
    verificarMaioridade(age);
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch ( {message} ) {
    return message;
  }
};

console.log(studantRegister('Sandro', 19));