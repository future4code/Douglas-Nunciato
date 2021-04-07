// console.log("EXERCÍCIO 1") // EXERCÍCIO 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")// Esse codigo pede para o usuario entrar com um numero
// const numero = Number(respostaDoUsuario) // transforma em variavel numérica e salva em numero

// if(numero % 2 === 0) {  // verifica se a variavel tem resto em uma divisao por 2 (serve para saber se é um numero par)
//   console.log("Passou no teste.")  // se o numero for par ou 0 mostra a mensagem "Passou no teste."
// } else {
//   console.log("Não passou no teste.") // e o numero for impar mostra a mensagem "Não passou no teste."
// }

// console.log("EXERCÍCIO 2") // EXERCÍCIO 2
// let fruta = prompt("Escolha uma fruta")// Esse codigo pede para o usuario entrar com um nome de uma fruta
// let preco // cria a variavel preco
// switch (fruta) { // usa um switch para analisar o nome da fruta
//   case "Laranja": // caso seja Laranja o preco recebe 3.5
//     preco = 3.5
//     break; // vai para o fim do switch
//   case "Maçã": // caso seja Maça o preco recebe 2.25
//     preco = 2.25
//     break;  // vai para o fim do switch
//   case "Uva": // caso seja Uva o preco recebe 0.30
//     preco = 0.30
//     break; // vai para o fim do switch
//   case "Pêra": // caso seja Pêra o preco recebe 5.5
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default: // no caso de nao ser nem um nome de fruta de cima o preco recebe 5
//     preco = 5   
//     break;// vai para o fim do switch
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)   // Imprime no console "O preço da fruta ", nome da fruta, " é ", "R$ ", valor da fruta

// // a. Para que serve o código acima?
// //    Esse codigo serve para saber o preço de uma fruta
// // b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// //    O preço da fruta Maçã  é  R$ 2.25
// // c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// //    O preço da fruta  Pêra  é  R$  5 (Indo para o valor de baixo) desconto kkkkk


// console.log("EXERCÍCIO 3")// EXERCÍCIO 3
// const numero = Number(prompt("Digite o primeiro número.")) // pede para o usuario digitar o primeiro número

// if(numero > 0) { // verifica se o numero digitado é maior que 0
//   console.log("Esse número passou no teste")  //imprime no console a mensagem Esse número passou no teste
// 	let mensagem = "Essa mensagem é secreta!!!"  // cria a variavel mensagem e atribue "Essa mensagem é secreta!!!"  na bloco interno
// }

// console.log(mensagem) // erro variavel nao existe

// a. O que a primeira linha está fazendo?
//  Pede para o usuario digitar o primeiro número
// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//  No caso de 10 o terminal vai mostrar a mensagem "Esse número passou no teste" seguido por uma mensagem de erro
//  no caso de -10 só aparece a mensagem de erro

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//  Sim teremos uma mensagem de erro no comando console.log(mensagem) pois a variavel foi criada dentro do bloco [if]
//  as variáveis criadas lá pertencem a este escopo fazendo com que ela seja inexistente nos outros escopos

console.log("EXERCÍCIO 4") // EXERCÍCIO 4

const idade = Number(prompt("Qual sua idade?"))// pede para o usuario digitar a idade dele

if(idade >= 18) { // compara de se a idade é maior ou igual à 18
  console.log("Você pode dirigir") // imprime no console "Você pode dirigir"
}
else { // se a idade for menor de 18
console.log("Você não pode dirigir.") // imprime no console "Você pode dirigir"
}
// Feito

console.log("EXERCÍCIO 5")// EXERCÍCIO 5

const turnoEstudo = prompt(" Qual turno do dia você estuda? \nDigitar M (matutino) ou V (Vespertino) ou N (Noturno)")


if(turnoEstudo === "M") { 
  console.log("Bom Dia!") // imprime no console 
} else if (turnoEstudo === "V") {
  console.log("Boa Tarde!") // imprime no console 
} else if (turnoEstudo === "N") {
    console.log("Boa Noite!") // imprime no console 
} else {
    console.log("Período não reconhecido") // imprime no console 
}

console.log("EXERCÍCIO 6")// EXERCÍCIO 6

const periodoEstudo = prompt(" Qual turno do dia você estuda? \nDigitar M (matutino) ou V (Vespertino) ou N (Noturno)")

switch (periodoEstudo) {
    case "M":
        console.log("Bom Dia!") // imprime no console 
    break
    case "V":
        console.log("Boa Tarde!") // imprime no console
    break
    case "N":
        console.log("Boa Noite!") // imprime no console 
    break
    default:
        console.log("Período não reconhecido") // imprime no console 
    break
}

console.log("EXERCÍCIO 7")// EXERCÍCIO 7

const genero = prompt("Qual o gênero do filme que vão assistir?")
const ingresso = Number (prompt("Qual o preço do ingresso? R$"))

if(genero === "fantasia" && ingresso <= 15 ) { 
      console.log("Bom filme!") 
    }
    else { 
    console.log("Escolha outro filme") 
    }
