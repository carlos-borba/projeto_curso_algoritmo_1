/*leia(nome)
escreval("Digite a sua primeira nota: ")
leia(nota1)
escreval("Digite a sua segunda nota: ")
leia(nota2)
media := (nota1 + nota2) / 2

se media >= 50 entao
 escreval("Aluno ", nome, " Aprovado com a média de ", media)
senao
 escreval("Aluno ", nome, " Reprovado com a média de ", media)
fimse*/

var nome, nota1, nota2;
nome = prompt("Digite O nome do aluno: ")
nota1 = prompt("Digite a sua primeira nota: ")
nota2= prompt("Digite a sua segunda nota: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 50)
    alert("Aluno aprovado! " + nome)
else
alert("Aluno reprovado! " + nome)