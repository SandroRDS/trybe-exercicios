# Exercícios - Criação de arquivos e diretórios

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.

2. Crie um arquivo de texto com o nome trybe.txt.

3. Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.

4. Renomeie o arquivo trybe.txt.

5. Dentro de unix_tests, crie um novo diretório chamado backup.

6. Mova o arquivo trybe_backup.txt para o diretório backup.

7. Dentro de unix_tests, crie um novo diretório chamado backup2.

8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

9. Apague a pasta backup.

10. Renomeie a pasta backup2 para backup.

11. Veja qual é o path completo do diretório atual e liste todos os arquivos dentro dele.

12. Apague o diretório backup.

13. Limpe o terminal.

## Resolução

1. > mkdir unix_tests <br> cd !$
2. > touch trybe.txt
3. > cp trybe.txt trybe_backup.txt
4. > mv trybe.txt trybe2.txt
5. > mkdir backup
6. > mv trybe_backup.txt backup/
7. > mkdir backup2
8. > mv backup/trybe_backup.txt backup2
9. > rmdir backup
10. > mv backup2 backup
11. > pwd <br> ls
12. > rm -rf backup
13. > clear