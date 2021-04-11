/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
window.alert("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
   // o que fazer se o usuário clicar "ok"
   const minhaMao = [comprarCarta(),comprarCarta()]
   let totalUser = Number(0)
   for (somaU of minhaMao) {
      totalUser += Number(somaU.valor)
   }
   console.log("Usuário - cartas: " + minhaMao[0].texto + " | " + minhaMao[1].texto + " - pontuação " + totalUser)
   const maoMesa = [comprarCarta(),comprarCarta()]
   let totalMesa = Number(0)
   for (somaU of maoMesa) {
      totalMesa += Number(somaU.valor)
   }
   console.log("Computador - cartas: " + maoMesa[0].texto + " | " + maoMesa[1].texto + " - pontuação " + totalMesa)
   if (totalUser === totalMesa) {
      console.log("Empate!")
   } else if (totalUser > totalMesa) {
      console.log("O usuário ganhou!")
   } else if (totalUser < totalMesa) {
      console.log("O computador ganhou!")
   }

} else {
   // o que fazer se o usuário clicar "cancelar"
   console.log("O jogo acabou")
 }
