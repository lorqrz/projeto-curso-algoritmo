/*
 valor01, valor02, resultado: real
  operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
// escreval pula uma linha, escreva não.
  escreva("Digite o primeiro valor: ")
  leia(valor01)
  escreva("Digite a operação (+, -, *, / : ")
  leia(operacao)
  escreva("Digite o segundo valor: ")
  leia(valor02)

  escolha operacao
      caso "+"
          resultado := valor01 + valor02
      caso "-"
          resultado := valor01 - valor02
      caso "*"
          resultado := valor01 * valor02
      caso "/"
          resultado := valor01 / valor02

      fimescolha

  escreva("Resultado: " , resultado)
*/

var valor01, valor02, resultado, operacao

function acaoBotao() {

    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação +, -, * ou / : ")
    valor02 = prompt("Digite o segundo falor: ")
    switch(operacao){

        case "+":
            resultado = parseInt(valor01) + parseInt(valor02)
            break;
        case "-":
            resultado = parseInt(valor01) - parseInt(valor02)
            break;
        case "*":
            resultado = parseInt(valor01) * parseInt(valor02)
            break;
        case "/":
            resultado = parseInt(valor01) / parseInt(valor02)
            break;
    }
    
    
    document.getElementById("paragrafo").innerText = resultado
}