// Acesse o elemento where-are-you.
const whereAreYou = document.querySelector('#where-are-you');

// Acesse parent a partir de where-are-you e adicione uma color a ele.
const parent = whereAreYou.parentNode;
parent.style.color = 'blue';

// Acesse o first-child-of-child e adicione um texto a ele.
const firstChildOfChild = whereAreYou.children[0];
firstChildOfChild.textContent = 'Eu sou um elemento filho!';

// Acesse o first-child a partir de parent.
const firstChild = parent.children[0];

// Acesse o first-child a partir de where-are-you.
whereAreYou.previousElementSibling;

// Acesse o texto Attention! a partir de where-are-you.
const textAttention = whereAreYou.nextSibling;

// Acesse o third-child a partir de where-are-you.
const thirdChild = whereAreYou.nextElementSibling;

// Acesse o third-child a partir de parent.
parent.children[2];