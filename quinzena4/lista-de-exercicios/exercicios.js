//Exercício 1

function inverteArray(array) {
   const invertida = array.reverse()
   return invertida
}


//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let novoArray = []
   for (let numb of array) {
      if ((numb % 2) === 0) {
         numb = numb**2
         novoArray.push(numb)
      }
   }
   return novoArray
}

//Exercício 3

function retornaNumerosPares (array) {
   let novoArray = []
   for (let numb of array) {
      if ((numb % 2) === 0) {
         novoArray.push(numb)
      }
   }
   return novoArray
}


//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = -Infinity
   for (let numb of array) {
      if (numb > maiorNumero) {
         maiorNumero = numb
      }
   }
   return maiorNumero
}


//Exercício 5

function retornaQuantidadeElementos (array) {
   const numeroElementos = array.length
   return numeroElementos
}
//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 
   const respostas = [booleano1 && booleano2 && !booleano4, (booleano1 && booleano2) || !booleano3, (booleano2 || booleano3) && (booleano4 || booleano1), !(booleano2 && booleano3) || !(booleano1 && booleano3), !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]
   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   const resposta7 = []
   let i = 0
   while (i<n){
      resposta7.push((i*2))
      i++
   }
   return resposta7
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if (a === b && b === c){
      return "Equilátero"
  } else if ( (a === b && b !== c) || (a === c && c !== b) || (b === c && c!==a) ) {
      return "Isósceles"
  }
   return "Escaleno"  
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maiorN
   let menorN
   let divisaoPossivel

   if (num1 > num2) {
      maiorN = num1
      menorN = num2    
   } else {
      maiorN = num2
      menorN = num1
   }
const deferenca = maiorN - menorN
divisaoPossivel = (maiorN % menorN === 0)

return {
   maiorNumero: maiorN,
   maiorDivisivelporMenor: divisaoPossivel,
   diferenca: deferenca
}

}

// Exercício 10

function segundoMaiorEMenor(array) {
   let maior = 0
   let menor = Infinity
   let segMaior = 0
   let segMenor = Infinity
   let indiceMenor
   let indiceMaior
   let novoArray = []

   for (let i = 0; i < array.length ; i++){
      if(array[i] < menor) {
         menor = array[i]
         indiceMenor = i
      } 
      if(array[i] > maior) {
         maior = array[i]
         indiceMaior = i
      }
   }
   array.splice(indiceMaior, 1)
   array.splice(indiceMenor, 1)

   for (let index of array){
      if(index < segMenor) {
         segMenor = index
      } 
      if(index > segMaior) {
         segMaior = index
      }
   }

   novoArray.push(segMaior)
   novoArray.push(segMenor)
   return novoArray
}

//Exercício 11

function ordenaArray(array) {
   const len = array.length
   for(let i = 0; i < len; i++) {
      for(let x = 0; x < len; x++) {
         if(array[x] > array[x + 1]) {
            let tmp = array[x]
            array[x] = array[x + 1]
            array[x + 1] = tmp
         }
      }
   }
  return array
}

// Exercício 12

function filmeFavorito() {
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme
}

// Exercício 13

function imprimeChamada() {
   const filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   let atoresOnly = ""

   for (let i = 0; i < filme.atores.length; i++) {
      if (i === filme.atores.length - 1) {
         atoresOnly += filme.atores[i]
      }else {  
      atoresOnly += filme.atores[i] + ", "
      }
   }
  
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresOnly}.`
  }

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const dadosRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
     }
   
   return dadosRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      ...pessoa, 
      nome: 'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
   })
   return novoArray
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
   })
   return novoArray
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const novoArray = array.map((num) => {
      return num * 2
   })
   return novoArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const novoArray = array.map((num) => {
      return(num * 2).toString()
   })
   return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   const novoArray = array.map((numb) => {
      if (numb % 2 === 0) {
        return `${numb} é par`
      } else {
        return `${numb} é ímpar`
      }
   })
   return novoArray
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let autorizadas = []
   for (const p of pessoas) {
      if (p.altura >= 1.5 && p.idade > 14 && p.idade < 60) {
         autorizadas.push(p)
      }
   }
   return autorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let naoAutorizadas = []
   for (const pessoa of pessoas) {
      if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
         naoAutorizadas.push(pessoa)
      }
   }
   return naoAutorizadas
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta() {
   return consultas.map((consulta) => {
   let emailNovo = "Olá, "

   if (!consulta.cancelada) {
      if (consulta.genero === "feminino") {
         emailNovo += "Sra. "
      } else {
         emailNovo += "Sr. "
      }
         
      emailNovo += consulta.nome + ". "
      emailNovo += "Estamos enviando esta mensagem para "
    
      if (consulta.genero === "feminino") {
         emailNovo += "lembrá-la "
      } else {
         emailNovo += "lembrá-lo "
      }
      emailNovo += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
      emailNovo += "Por favor, acuse o recebimento deste-email."
      } else {
      if (consulta.genero === "feminino") {
         emailNovo += "Sra. "
      } else {
         emailNovo += "Sr. "
      }
    
      emailNovo += consulta.nome + ". "
      emailNovo += "Infelizmente sua consulta marcada para o dia "
      emailNovo += consulta.dataDaConsulta + " foi cancelada. "
      emailNovo += "Se quiser, pode entrar em contato conosco para remarcá-la."
   }
   return emailNovo
   });
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((conta) => {
      let totalCompras = 0
      conta.compras.forEach((valor) => {
        totalCompras += valor
      })
      conta.saldoTotal -= totalCompras
    })
   return contas
}