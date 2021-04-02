// Exercícios de interpretação de código
// 1.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // true

console.log("e. ", typeof resultado) // boolean

// 2.
let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // 11

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array) // (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // 9

// Exercícios de escrita de código
// 1.
const idadeUser = Number (prompt ('Qual sua idade?'))
console.log(typeof idadeUser)
const idadeAmigo = Number (prompt ('Qual a idade do seu melhor amigo?'))
let maiorOuMenor = idadeUser > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", maiorOuMenor)
let difereIdade = idadeUser - idadeAmigo
console.log("A diferença de idade é ", difereIdade)

// 2.
const numbPar = Number (prompt ('Insira um número par'))
let resp2 = numbPar / 2
console.log(" o resto da divisão desse número por 2 ", resp2)
// c. Testei com vários numeros pares e sempre deu resultados de numeros inteiros (sem resto)
// d. Testei com vários numeros impares e o sesultado deu diversos numero fracionários com casa depois da virgula (com resto de divisão)


// 3.

const listaDeTarefas = []
let tarefa1 = prompt ('Me diga 3 tarefas que ele precise realizar no dia. \nPrimeira tarefa:')
listaDeTarefas.push(tarefa1)
let tarefa2 = prompt ('Segunda tarefa:')
listaDeTarefas.push(tarefa2)
let tarefa3 = prompt ('Terceira tarefa:')
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
let feito = Number (prompt ('Digite o índice de uma tarefa que você já realizou: 0, 1 ou 2 '))
listaDeTarefas.splice(feito, 1)
console.log(listaDeTarefas)