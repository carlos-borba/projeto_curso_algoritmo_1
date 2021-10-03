/*
Var
// Seção de Declaração das Variáveis
    nome: caractere
    numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Didite o nome: ")
   leia(nome)
   escreval("Digite o numero: ")
   leia(numero)
   
   escreval(nome, " : ", numero)
*/

var nome, numero

nome = prompt("Didite o seu nome: ")
numero = prompt("Didite um número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero