//Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta a seguir e compare-a com sua solução.
let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

function listarHabilidades(estudante) {
    const habilidades = Object.keys(estudante);

    for(let skill of habilidades)
    {
        console.log(`${skill}, Nível: ${estudante[skill]}`);
    }
}

console.log("Estudante 1:")
listarHabilidades(student1);

console.log("\nEstudante 2:")
listarHabilidades(student2);