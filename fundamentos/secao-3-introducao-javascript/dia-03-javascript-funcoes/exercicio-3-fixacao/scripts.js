let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validarNome(nomeCliente) {
    return typeof nomeCliente === 'string';
}

function verificarClienteExistente(nomeCliente) {
    return clientesTrybeBank.includes(nomeCliente);
}

function removeCliente(cliente) {
    if (!validarNome(cliente)) {
        return 'Nome inválido!';
    }
    
    if(verificarClienteExistente(cliente))
    {
        return 'Cliente excluída(o) com sucesso!';
    }
    else
    {
        return 'Cliente não encontrado!'
    }
};

console.log(removeCliente('Gus'));