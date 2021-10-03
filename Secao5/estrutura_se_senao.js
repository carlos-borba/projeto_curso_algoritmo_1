/*
Var
// Seção de Declarações das variáveis 
  valor1 , valor2, resultado: real
  operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
//   escreva("A proposta do programa é calcular dois valores baseados na operação escolhida")
   escreva("Digite o primeiro valor: ")
   leia(valor1)
   escreva("Digite a operação: ex: +, -, /, *: ")
   leia(operacao)
   escreva("Digite o segundo valor: ")
   leia(valor2)
   
   se operacao = "+" entao
      resultado := valor1 + valor2
   senao
     se operacao = "-" entao
        resultado := valor1 - valor2
     senao
        se operacao = "*" entao
           resultado := valor1 * valor2
        senao
             se operacao = "/" entao
                resultado := valor1 / valor2
             fimse
        fimse
     fimse
   fimse
   
   escreva("Resultado do calculo é: ",resultado)
   */



function acaoBotao() {
    var num1, num2, resultado, operacao
    num1 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: ex: +, -, /, *: ")
    num2 = prompt("Digite o segundo valor: ")

    if (operacao == "+"){
        resultado = parseInt(num1) + parseInt(num2)
    } else if (operacao == "-"){
        resultado = parseInt(num1) - parseInt(num2)
    } else if (operacao == "*"){
        resultado = parseInt(num1) * parseInt(num2)
    } else if (operacao == "/"){
        resultado = parseInt(num1) / parseInt(num2)
    }

    document.getElementById("paragrafo").innerText = resultado
}