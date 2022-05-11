/*valor01, valor02, resultado: real
  operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
// escreval pula uma linha, escreva não.
  escreval("A proposta desse programa é calcular dois valores baseado na operação da sua escolha")
  escreva("Digite o primeiro valor: ")
  leia(valor01)
  escreva("Digite a operação (+, -, *, / : ")
  leia(operacao)
  escreva("Digite o segundo valor: ")
  leia(valor02)
  
  se operacao = "+" entao
      resultado := valor01 + valor02
  senao
      se operacao = "-" entao
          resultado := valor01 - valor02
      senao
          se operacao = "*" entao
              resultado := valor01 * valor02
          senao
              se operacao = "/" entao
                  resultado := valor01 / valor02
              fimse
          fimse
      fimse
  fimse
  escreva("Resultado: " , resultado) */

var valor01, valor02, resultado, operacao

function acaoBotao() {

    valor01 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operação +, -, * ou / : ")
    valor02 = prompt("Digite o segundo falor: ")
    
    
    if(operacao == "+")
        resultado = valor01 + valor02
    else if(operacao == "-")
        resultado = parseInt(valor01) - parseInt(valor02)
    else if(operacao == "*")
        resultado = parseInt(valor01) * parseInt(valor02)
    else if(operacao == "/")
        resultado = parseInt(valor01) / parseInt(valor02)
    
    
    document.getElementById("paragrafo").innerText = resultado
}

