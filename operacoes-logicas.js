/*
   nota01, nota02, media: real
   nome: caractere
   passou: logico

Inicio
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a nota 01 do aluno (de 0 a 10): ")
   leia(nota01)
   escreval("Digite a nota 02 do aluno (de 0 a 10): ")
   leia(nota02)
   media := (nota01 + nota02)/2
   
   se media > 5 entao
      passou := verdadeiro
   fimse

// se !pasou = se diferente de passou. não rodou o código do professor

   se ( passou ) && ( media >= 50 || media <= 70) entao
      escreval("Passou direto ", nome, "!")
   senao
      escreval("Em recuperação ", nome, "!")

   fimse
   */

var nome, nota01, nota02, passou;
passou = false;

nome = prompt("Digite o nome do aluno: ")
nota01 = prompt("Digite a nota01 do aluno: ")
nota02 = prompt("Digite a nota02 do aluno: ")
media = (parseInt(nota01) + parseInt(nota02))/2

    if(media >= 5)
        passou = true;
    else
        alert("Aprovado " + nome + "!")
    
    if(passou){
        alert("Aprovado " + nome + "!")
      }
    else
        alert("Reprovado " + nome + "!")