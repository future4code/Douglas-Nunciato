/* EXERCÍCIO 1

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

    R: declara variavel valor=0. Faz um laço que se repete 5 vezes somando 0+1+2+3+4 a uma variavel chamada valor
*/

/* EXERCÍCIO 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a. O que vai ser impresso no console?
    R:Será impresso no console cada numero no array [lista] maior que 18 ou seja 19, 21, 23, 25, 27, 30

b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
    R:O for  of  vai repetir o codigo uma vez para cada elemento na lista... se você quiser "acessar" cada elemento o for of vai ajudar.
    para imprimir cada elemento no console basta colocar um console.log(numero) depois do for ... of.
    */

/* EXECICÍo 3

a. Escreva um programa que:

- **Imprima** cada um dos valores do array original. */

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let numb of array) {
		console.log(numb)
}
/* 
b. Escreva um programa que:

- **Imprima** cada um dos valores do array original divididos por 10 */
for (let numb of array) {
    console.log(numb * 10)
}
 /*
c. Escreva um programa que:

- **Crie** um novo array contendo, somente, os números pares do array original.
- **Imprima** esse novo array */

let novoArray = []
for (let numb of array) {
    if ((numb % 2) === 0) {
        novoArray.push(numb)
    }
}
console.log(novoArray)

/* d. Escreva um programa que:

- **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
- **Imprima** este novo array */
let arrayStrings = []
for (let index = 0; index < array.length ; index++) {
    //    se for apenas para imprimir no console seria assim e fim console.log("O elemento do índex", index, "é", array[index]) }
    switch (index) {
        case 0:
            arrayStrings.push("'O elemento do índex 0 é 80'")
        break
        case 1:
            arrayStrings.push("'O elemento do índex 1 é 30'")
       break
       case 2:
            arrayStrings.push("'O elemento do índex 2 é 130'")
        break
        case 3:
            arrayStrings.push("'O elemento do índex 3 é 40'")
       break
       case 4:
            arrayStrings.push("'O elemento do índex 4 é 60'")
        break
        case 5:
            arrayStrings.push("'O elemento do índex 5 é 21'")
       break
       case 6:
            arrayStrings.push("'O elemento do índex 6 é 70'")
        break
        case 7:
            arrayStrings.push("'O elemento do índex 7 é 120'")
       break
       case 8:
            arrayStrings.push("'O elemento do índex 8 é 90'")
        break
        case 9:
            arrayStrings.push("'O elemento do índex 9 é 103'")
       break
       case 10:
            arrayStrings.push("'O elemento do índex 10 é 110'")
        break
        case 11:
            arrayStrings.push("'O elemento do índex 11 é 55'")
       break
    }
    console.log(arrayStrings[index])
}

/* 
    e. Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/
let valorMaximo = !Infinity
let valorMinimo = Infinity

for (i of array) {
    if (i > valorMaximo) {
        valorMaximo = i
    } else if (i < valorMinimo) {
        valorMinimo = i
    }
}
console.log("O maior número é", valorMaximo,"e o menor é", valorMinimo)