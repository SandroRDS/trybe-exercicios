# Módulo 1 - Dia 5.5: Responsividade

> Data: 25/04/2023

Hoje fomos introduzidos totalmente aos recursos de responsividade do CSS. A responsibidade nada mais é do que ferramentas do CSS que auxiliam a adaptar a estilização (forma que os elementos são exibidos na página) dependendo do modo de visualização da página e o tamanho do dispositivo que a está visualizando. Através dela, é possível que um mesmo site, com uma mesma estrutura HTML, possa ser visualizado por diversos tipos e tamanhos de dispositivos diferentes sem prejudicar a experiência do usuário. Desta forma, através desse recurso, aliado também ao Flexbox e Grid Layout, é eliminada a necessidade de reconstruir uma mesma página repetidas vezes, adaptando-a para dispositivos diferentes (salvo alguns casos onde a versão mobile e desktop são estruturalmente distintas e é ponderado ser menos complexo construir uma nova página separada para cada uma do que montar uma página que atenda as necessidades das duas).

O principal recurso do CSS para configurar a responsividade de uma página são as *Media Queries*. Através delas, é possível definir a utilização de um determinado estilo a partir da declaração de uma expressão lógica:

<pre>
@media screen and (min-width: 768px) {
  div {
    background-color: white;
  }
}
</pre>

Na declaração acima, *@media* é a **At-rule** que indica a declaração de uma Media Querie, *min-width* é a **Media Feature** que irá retornar um valor de *true* ou *false* e o *and* é o operador lógico utilizado para delimitar que o estilo declarado entre as chaves só deverá ser ativado no caso das duas declarações lógicas serem verdadeiras (nesse caso, a página deve estar sendo renderizada por uma tela com uma largura de no mínimo 768px).
