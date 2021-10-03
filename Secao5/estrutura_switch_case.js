function acaoBotao() {
    var num1, num2, resultado, operacao
    num1 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação: ex: +, -, /, *: ")
    num2 = prompt("Digite o segundo valor: ")

    switch (operacao) {
        case "+":
            resultado = parseInt(num1) + parseInt(num2)
            break;
        case "-":
            resultado = parseInt(num1) - parseInt(num2)
            break;
        case "/":
            resultado = parseInt(num1) / parseInt(num2)
            break;
        case "*":
            resultado = parseInt(num1) * parseInt(num2)
            break;
    }
    
    document.getElementById("paragrafo").innerText = resultado
}