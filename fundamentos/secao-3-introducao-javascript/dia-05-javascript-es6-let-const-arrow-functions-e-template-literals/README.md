# Módulo 1 - Dia 3.4: JavaScript ES6 - let, const, arrow functions e template literals

> Data: 04/04/2023

Hoje abordamos sobre três features muito importantes do ECMAScript 6 (2015):
* __let__ e __const__;
* Arrow functions; e
* Template strings.

## Let e Const
O __let__ e __const__ são novas formas de criar variáveis que foram implementadas no ES6 com objetivo de substituir o var e eliminar os problemas de vazamento de escopo que ele causava. Ao declarar variáveis com __var__, o escopo dessas variáveis é limitado apenas pelo escopo de funções, dessa forma, ao declarar uma __var__ dentro de uma estrutura de repetição ou condicional, sua escopo "vaza" para o escopo global, podendo ocasionar diversos mau-funcionamentos na estrutura do código. Em contrapartida, variáveis do tipo __let__ e __const__ tem seu escopo limitado pelo escopo local e só podem ser declaradas com mesmo nome em escopos distintos.

A diferença entre __let__ e __const__ se caracteriza, basicamente, com a possibilidade de ser reatribuído ou não: ao declarar uma variável __const__, ela se comporta como uma constante, sendo assim, não é possível reatribuir o valor da mesma após a declaração (apenas alterar valores de posições e propriedades/métodos no caso de arrays e objetos), sendo obrigatório atribuir seu valor durante a declaração. Em contrapartida, o __let__ pode ser reatribuído a qualquer momento durante o fluxo do código.

## Arrow Functions
As arrow functions são novas formas de declarar funções anônimas que surgiram no ES6 e deixaram a sintaxe de declaração de funções curtas bem mais enxutas e simples.

## Template String
As template strings foram uma nova funcionalidade adicionada no ES6 extremamente úteis para criação de strings, possibilitando concatenar o valor de variáveis e expressões em strings de forma mais limpa e simples.