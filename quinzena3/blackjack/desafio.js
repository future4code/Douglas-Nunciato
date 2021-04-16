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
//   Primeiro passo Inicio dar Cartas
let cartaUser = []
let cartaMesa = []
   while(confirm("Quer iniciar uma nova rodada?")) {
      let minhaMao = [comprarCarta(),comprarCarta()]
      
      while (minhaMao[0].valor && minhaMao[1].valor == 11) {
         minhaMao = [comprarCarta(),comprarCarta()]
      }
      let totalUser = Number(0)
      for (somaU of minhaMao) {
         totalUser += Number(somaU.valor)
      }
      let maoMesa = [comprarCarta(),comprarCarta()]
     
      while (maoMesa[0].valor && maoMesa[1].valor == 11) {
         maoMesa = [comprarCarta(),comprarCarta()]
      }
//   Segundo passo O Jogador Joga
      cartaUser = []
      for (let i = 0; i < minhaMao.length ; i++){
         cartaUser.push(minhaMao[i].texto)
      }
      
      while (totalUser<21 && confirm("Suas cartas são: " + cartaUser + " Sua pontuação é " + totalUser + "\n" +
         "A carta revelada do computador é " + maoMesa[0].texto + "\n" +
         "Deseja comprar mais uma carta?")) {
     
         minhaMao.push(comprarCarta())
         totalUser = Number(0)
         for (somaU of minhaMao) {
            totalUser += Number(somaU.valor)
         }
         cartaUser = []
         for (let i = 0; i < minhaMao.length ; i++){
            cartaUser.push(minhaMao[i].texto)
         }
         
      }
// Terceiro Passo O Computador JOGA

      let totalMesa = Number(0)
      for (somaC of maoMesa) {
         totalMesa += Number(somaC.valor)
      }
      cartaMesa = []
      for (let i = 0; i < maoMesa.length ; i++){
         cartaMesa.push(maoMesa[i].texto)
      }
      
      while (totalMesa<totalUser && totalMesa<21 && totalUser<=21) {
         maoMesa.push(comprarCarta())
         totalMesa = Number(0)
         for (somaC of maoMesa) {
            totalMesa += Number(somaC.valor)
         }
         cartaMesa = []
         for (let i = 0; i < maoMesa.length ; i++){
            cartaMesa.push(maoMesa[i].texto)
         }
      }
// Quarto Passo Conferindo o vitorioso
      console.log("Suas cartas são " + cartaUser +  ". Sua pontuação é " + totalUser)
      console.log("As cartas do computador são " + cartaMesa + ". A pontuação do computador é " + totalMesa)

      
      if (totalUser === totalMesa) {
         console.log("Empate!")
         window.alert("Suas cartas são  " + cartaUser +  ". Sua pontuação é " + totalUser + 
         "\nAs cartas do computador são  " + cartaMesa + ".  Pontuação do PC é " + totalMesa + "\nEmpate!")
      } else if (Boolean(totalUser > totalMesa) && Boolean(totalUser<=21)) {
         console.log("Você é o Vencedor!")
         window.alert("Suas cartas são  " + cartaUser +  ". Sua pontuação é " + totalUser + 
         "\nAs cartas do computador são  " + cartaMesa + ".  Pontuação do PC é " + totalMesa + "\nO usuário ganhou!")
      } else if (Boolean(totalUser < totalMesa) && Boolean(totalMesa<=21)) {
         console.log("O computador ganhou!")
         window.alert("Suas cartas são  " + cartaUser +  ". Sua pontuação é " + totalUser + 
         "\nAs cartas do computador são  " + cartaMesa + ".  Pontuação do PC é " + totalMesa + "\nO computador ganhou!")
      } else if (Boolean(totalMesa<=21)&& Boolean(totalUser>21)){
         console.log("Você Perdeu. O computador é o Vencedor! ")
         window.alert("Suas cartas são  " + cartaUser +  ". Sua pontuação é " + totalUser + 
         "\nAs cartas do computador são  " + cartaMesa + ".  Pontuação do PC é " + totalMesa + "\nVocê Perdeu. O computador é o Vencedor!")
      } else if (Boolean(totalMesa>21)&& Boolean(totalUser<=21)){
         console.log("Você é o Vencedor!")
         window.alert("Suas cartas são  " + cartaUser +  ". Sua pontuação é " + totalUser + 
         "\nAs cartas do computador são  " + cartaMesa + ".  Pontuação do PC é " + totalMesa + "\nVocê é o Vencedor!")
      }
   } 
      console.log("O jogo acabou")
    
    
   