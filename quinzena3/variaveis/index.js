/* Exercícios de interpretação de código   
1. */
a = 10
b = 10

console.log(b) // Mostra na tela: 10

b = 5
console.log(a, b) // Mostra na tela: 10 10
// 2.
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c) // Mostra na tela: 10 10 10

/* Exercícios de escrita de código
1. */
let nome
let idade

console.log(typeof nome) // undefined
console.log(typeof idade) // undefined Porque não foi atribuindo nem um valor a elas.

nome = prompt ("Qual seu nome?")
idade = prompt ("Qual sua Idade?")

console.log(typeof nome) 
console.log(typeof idade) // string Porque foi atribuido um texto através do prompt
console.log("Olá", nome, ",  você tem", idade," anos")
//2.

let calor = prompt ("Você está com calor?")
let roupas = prompt ("Que roupas você está usando?")
let tirar = prompt ("Você gostaria de tirar a roupa?")
let nu = prompt ("Você está nú?")
let foto = prompt ("Posso tirar uma foto sua?")

console.log ("1. Você está com calor?")
console.log ("Resposta:", calor)
console.log ("2. Que roupas você está usando?")
console.log ("Resposta:", roupas)
console.log ("3. Você gostaria de tirar a roupa?")
console.log ("Resposta:", tirar)
console.log ("4. Você está nú?")
console.log ("Resposta:", nu)
console.log ("5. Posso tirar uma foto sua?")
console.log ("Resposta:", foto)
//3.

let comidasFavoritas = ["Tomate", "Feijoada", "Sorvete", "Lazanha", "Chocolate"]
console.log(comidasFavoritas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
comidasFavoritas[1] = prompt("Me diga uma comida favoríta:")
console.log(comidasFavoritas)
console.log("Essas são as minhas novas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
// 4.
let perguntas = ["Você está com sede?","Você já bebeu água hoje?", "Cerveja mata a sede?"]
let respostas = [true,true,false]
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])