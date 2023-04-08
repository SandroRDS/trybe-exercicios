let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Questão 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é: Bem-vinda, Margarida
console.log("Questão 1: \n");
console.log(`Bem-vinda, ${info.personagem}`);

// Questão 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor
console.log("\n\nQuestão 2: \n");
info['recorrente'] = 'Sim';
console.log(info);

// Questão 3 - Faça um for/in que mostre todas as chaves do objeto.
console.log("\n\nQuestão 3: \n");
for(key in info) {
    console.log(key);
}

// Questão 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.
console.log("\n\nQuestão 4: \n");
for(key in info) {
    console.log(info[key]);
}

// Questão 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.
console.log("\n\nQuestão 5: \n");
let info2 = {};
let info2Values = ["Tio Patinhas", "Christmas on Bear Mountain, Dell’s Four Color Comics #178", "O último MacPatinhas", "Sim"];
const infoChaves = Object.keys(info);

for(index in infoChaves) {
    info2[infoChaves[index]] = info2Values[index];
}

for(key of infoChaves) {
    let mensagem;

    if(info[key] === info2[key]) {
        mensagem = "Ambos recorrentes";
    } else {
        mensagem = `${info[key]} e ${info2[key]}`;
    }
    console.log(mensagem);
}