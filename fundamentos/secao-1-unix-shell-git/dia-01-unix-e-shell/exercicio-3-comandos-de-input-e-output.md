# Exercícios - Comandos de input e output

1. Crie a pasta unix_tests_skills e navegue até ela.

2. Crie um arquivo de texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, cada um em sua linha.

3. Adicione mais 5 itens à sua lista de skills e, depois, imprima a lista ordenada no terminal.

4. Conte o número de linhas do arquivo skills2.txt.

5. Crie um arquivo chamado top_skills.txt usando o skills2.txt. Ele deve conter as 3 primeiras skills em ordem alfabética.

6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

7. Conte o número de linhas que contêm as letras br.

8. Conte o número de linhas que não contêm as letras br.

9. Adicione dois nomes de países ao final do arquivo phrases2.txt.

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt.

11. Ordene o arquivo bunch_of_things.txt.

## Resolução

1. > mkdir unix_tests_skills <br> cd !$
2. > cat > skills2.txt <br><br> Escreva as palavras Internet, Unix e Bash, apertando __ENTER__ após digitar cada uma
3. > cat >> skills2.txt <br><br> Digite mais 5 itens na lista, por exemplo: HTML, CSS, JavaScript, Node.JS e SQL <br><br> sort skills2.txt
4. > wc -l skills2.txt
5. > sort skills2.txt | head -3
6. > cat > phrases2.txt
7. > grep "br" phrases2.txt | wc -l
8. > grep -v "br" phrases2.txt | wc -l
9. > cat >> phrases2.txt <br><br> Insira o nome de dois paises, por exemplo: Brazil e Espanha
10. > cat phrases2.txt ../unix_tests_search/countries.txt > bunch_of_things.txt
11. > sort bunch_of_things.txt > bunch_of_things_ordenado.txt <br> cat bunch_of_things_ordenado.txt > bunch_of_things.txt