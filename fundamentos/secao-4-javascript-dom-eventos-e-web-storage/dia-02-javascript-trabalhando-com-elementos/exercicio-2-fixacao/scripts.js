const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// Crie um irmão para elementoOndeVoceEsta.
const elementoIrmao = document.createElement('div');
elementoOndeVoceEsta.parentNode.insertBefore(elementoIrmao, elementoOndeVoceEsta.nextSibling);

// Crie um filho para elementoOndeVoceEsta.
const elementoFilho = document.createElement('div');
elementoOndeVoceEsta.appendChild(elementoFilho);

// Crie um filho para primeiroFilhoDoFilho.
const elementoFilhoDoFilho = document.createElement('div');
elementoOndeVoceEsta.children[0].appendChild(elementoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.
console.log(elementoFilhoDoFilho.parentNode.parentNode.nextElementSibling.nextElementSibling);