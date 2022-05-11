/* nota01, nota02, media: real
   nome: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota 01 do aluno: ")
   leia(nota01)
   escreval("Digite a nota 02 do aluno: ")
   leia(nota02)
   media := (nota01 + nota02)/ 2
   
   se media >=5 entao
      escreval("Aprovado ", nome, "!")
   senao
      escreval("Reptovado ", nome, "!")
   fimse
   */

   var nota01, nota02, media, nome;

   nome = prompt("Digite o nome do aluno: ")
   nota01 = prompt("Digite a nota01 do aluno: ")
   nota02 = prompt("Digite a nota02 do aluno: ")

   media = (nota01 + nota02)/2

   if(media >= 5){
      alert("Aprovado " + nome + "!")}
    else
      alert("Reprovado " + nome + "!")