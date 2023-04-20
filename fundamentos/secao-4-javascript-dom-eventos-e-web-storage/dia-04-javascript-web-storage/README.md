# Módulo 1 - Dia 4.4: JavaScript - Web Storage

> Data: 13/04/2023

Hoje abordamos sobre armazenamento de dados no navegador e alguns recursos que o JavaScript disponibiliza para manipularmos isso. Neste primeiro momento, os recursos aprendidos foram:

* Cookies;
* Local Storage; e
* Session Storage.

A diferença de cada recurso está, principalmente, no que diz respeito à forma de utilização, ou seja, a forma que a sua página irá querer armazenar os dados do usuário, sendo cada um interessante para abranger situações específicas. Os cookies normalmente são utilizados quando queremos que os dados armazenados sejam acessíveis pelo servidor, uma vez que os cookies são enviados para o servidor dentro das requests. Em contra-partida, tanto o Local Storage quanto o Session Storage ficam acessíveis apenas no client-side, desta forma, a diferença desses dois está no tempo de expiração. Enquanto o Local Storage permanece salvo no navegador por tempo indeterminado (até ser limpo manualmente), o Session Storage é limpo assim que a janela atual do navegador é encerrada.