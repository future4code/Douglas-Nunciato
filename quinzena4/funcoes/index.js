// Exercícios de interpretação de código //

/*

EXERCÍCIO 1

a. 10
   50

b. As funções seriam executadas mas nada apareceria no console.


EXERCÍCIO 2

a.  Darvas
    Goli

b.  Amanda
    Caio


EXERCÍCIO 3

Essa função passa por todo o array de entrada, verifica se o número é par e, se for par, adiciona o número multiplicado por ele mesmo a um novo array (arrayFinal).


*/

// Exercícios de escrita de código //

/*


EXERCÍCIO 4

a.

function sobreMim() {
    console.log("Eu sou o Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
}

b.

function sobreMim(nome, idade, cidade, ehEstudante) {
    let mensagemSeEstudante = ""
    if (ehEstudante) {
        mensagemSeEstudante = "sou"
    } else {
        mensagemSeEstudante = "não sou"
    }

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${mensagemSeEstudante} estudante.`)
}


EXERCICIO 5

a.

let soma = function(a, b) {
    return a + b
}

console.log(soma(1, 2))

b.

let ehMaior = function(a, b) {
    if (a >= b) {
        return true
    } else {
        return false
    }
}

console.log(ehMaior(13, 6))

c.

let imprimeDezVezes = function (mensagem) {
    for (let i = 0; i < 10; i++) {
        console.log(mensagem)
    }
}


EXERCÍCIO 6

a.

let quantidadeDeElementos = (array) => {
    return array.length
}

b.

let ehPar = (numero) => {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

c.

let numeroDePares = (array) => {
    let quantidadeDePares = 0
    for (numero of array) {
        if (numero % 2 === 0) {
            quantidadeDePares += 1
        }
    }

    return quantidadeDePares
}

d.

let numeroDePares = (array) => {
    let quantidadeDePares = 0
    for (numero of array) {
        if (ehPar(numero)) {
            quantidadeDePares += 1
        }
    }

    return quantidadeDePares
}

*/