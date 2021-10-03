/*
 Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou := falso
   escreval("Digite o seu nome: ")
   leia(nome)
   escreval("Digite a sua primeira nota: ")
   leia(nota1)
   escreval("Digite a sua segunda nota: ")
   leia(nota2)
   media := (nota1 + nota2) / 2

   se media >= 50 entao
      passou := verdadeiro
   fimse
   
   se !passou entao
      escreval("Reprovado! ", nome)
   senao
        escreval("Aprovado! ", nome)
   fimse
   */
var nome, nota1, nota2;

passou = false;

nome = prompt("Digite O nome do aluno: ")
nota1 = prompt("Digite a sua primeira nota: ")
nota2= prompt("Digite a sua segunda nota: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 50)
    passou = true;

if (passou)
alert("Aluno Aprovado! " + nome)
    
else
    alert("Aluno reprovado! " + nome)