let clientesTrybeBank = ['Ada', 'John', 'Gus'];

//Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
function adicionarCliente(novoCliente)
{
    if(typeof novoCliente !== "string")
    {
        console.log("Nome inválido!");
    }
    else
    {
        clientesTrybeBank.push(novoCliente);
    }
}

adicionarCliente("Sandro");
console.log(clientesTrybeBank);

//Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.
function removerCliente(clienteSelecionado) {
    if(typeof clienteSelecionado !== "string")
    {
        console.log("Nome inválido!");
    }
    else
    {
        if(!clientesTrybeBank.includes(clienteSelecionado))
        {
            console.log("Cliente inexistente!");
        }
        else
        {
            clientesTrybeBank = clientesTrybeBank.filter((cliente) => cliente !== clienteSelecionado);
        }
    }
}

removerCliente("Gus");
console.log(clientesTrybeBank);