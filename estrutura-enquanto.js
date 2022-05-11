/* nome: caractere
idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite a quantidade de vezes que vai ser verificada a idade: ")
leia(limite)
contador := 0
//tem que incrementar o contador depois do loop, antes de fechar o enquanto.
enquanto contador < limite faca
    escreva("Digite o nome da pessoa: ")
    leia(nome)
    escreva("Digite a idade do ", nome, ": ")
    leia(idade)
    se idade < 18 entao
//o escreva coloca o conteúdo na frente da mesma linha; o escreval coloca o cursor na linha de baixo.
        escreval(nome, " você é menor de idade!")
    senao
        escreval(nome, " você é maior de idade!")
    fimse
    contador := contador + 1
fimenquanto
 */

function acaoBotao(){
    var nome, idade, limite, contador

    limite = prompt("Digite a quantidade de vezes que vai ser verificada a idade: ")
    contador = 0
    while(contador < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do ", nome, ": ")
        if(idade < 18){
            document.getElementById("paragrafo").innerText = nome + " você é menor de idade!"
        }
        else    
            document.getElementById("paragrafo").innerText = nome + " você é maior de idade!"
        contador++


}}