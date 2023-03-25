# Exercícios - Manipulação e Busca

## Parte I

Crie um novo diretório chamado unix_tests_search e navegue até ele.

Na pasta unix_tests_search, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl.

1. Mostre todo o conteúdo do arquivo countries.txt na tela.

2. Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.

3. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

4. Busque por Brazil no countries.txt.

5. Busque novamente por brazil, mas agora utilize o lower case e não considere letras maiúsculas ou minúsculas.

### Resolução

Passos iniciais 
> mkdir unix_tests_search <br> cd !$ <br> curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

1. > cat countries.txt
2. > less countries.txt <br><br> Vá pulando linha por linha com a tecla __&#8595;__ ou pule de página em página com __SPACE__ até chegar na palavra Zambia
3. > less countries.txt <br><br> Aperte a tecla __/__, digite a palavra Zambia e aperte __ENTER__
4. > grep "Brazil" countries.txt
5. > grep -i "brazil" countries.txt

## Parte II

Crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não é necessário criar o arquivo pelo terminal.

1. Busque pelas frases que não contenham a palavra fox.
2. Conte o número de palavras do arquivo phrases.txt.
3. Conte o número de linhas do arquivo phrases.txt.

### Resolução

1. > grep -v "fox" phrases.txt
2. > wc -w phrases.txt
3. > wc -l phrases.txt

## Parte III

1. Crie os arquivos empty.tbt e empty.pdf.
2. Liste todos os arquivos do diretório unix_tests_search.
3. Liste todos os arquivos que terminem com txt.
4. Liste todos os arquivos que terminem com tbt ou txt.
5. Acesse o manual do comando ls.

### Resolução

1. > touch empty.tbt <br> touch empty.pdf
2. > ls
3. > ls *txt
4. > ls *t[b,x]t
5. > man ls