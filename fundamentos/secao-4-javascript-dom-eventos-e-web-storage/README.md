# Módulo 1 - Seção 4: JavaScript - DOM, Eventos e Web Storage

Nesta seção, começamos a abordar sobre os recursos do JavaScript para manipular páginas web e como eles funcionam. O primeiro deles foi o DOM (Document Object Model), o qual é a base que fundamenta todas as implementações de JavaScript na web, pois é a partir do DOM que o JavaScript é capaz de interpretar um documento HTML e manipulá-lo, transformando os elementos do HTML em objetos. 

Em seguida, fomos apresentados ao conceito de eventos em JavaScript, que consistem em gatilhos que o usuário ou o próprio navegador acionam durante a utilização de uma página web (ao clicar..., ao passar o ponteiro..., ao retirar o ponteiro..., o pressionar uma tecla..., etc). Desta forma, podemos atribuir blocos de código (funções) para serem executados quando um determinado gatilho for disparado de três principais formas:

* inline-event (**Não recomendado**)

Inserção de eventos através de atributos *onevent* do HTML, modificando o evento diretamente no elemento. Essa não é uma prática muito recomendada principalmente pela dificuldade de se manipular e modificar eventos inline e por deixar o código mais confuso.

* Propriedades *onevent* do DOM

Inserção de eventos através das propriedades *onevent* dos elementos do DOM, atribuindo uma função para a propriedade que representa o evento específico que é desejado acionar. A maior desvantagem desse método é que cada tipo de evento pode receber apenas uma função respectiva à esse evento, desta forma, caso seja necessário realizar várias funções durante o gatilho de um elemento, seria preciso passar para a propriedade do evento uma função anônima fazendo chamada de todas as demais funções que devem ser executadas quando aquele evento for disparado.

* Método Element.*addEventListener()* (**Mais recomendado**)

Esse método possui dois principais parâmetros, que são obrigatórios: o tipo de evento e a função que deverá ser executada quando aquele tipo de evento ocorrer. A partir disso, é adicionado um "escutador" ao elemento, o qual irá monitorar o estado do elemento e executar a função que recebeu sempre que o elemento disparar o gatilho de evento que foi especificado ao escutador. Desta forma, como cada escutador é um objeto separado, é possível acumular escutadores que executam funções distintas para um mesmo tipo de evento, sendo isso um dos principais motivos para ser a prática mais recomendada de implementação de eventos.

Por fim, o último assunto da seção foi Web Storage, onde discutimos alguns dos recursos disponíveis no JavaScript para armazenar dados no navegador, que foram:

* Cookies;
* Local Storage; e
* Session Storage.