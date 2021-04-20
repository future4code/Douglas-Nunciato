let meuConteudo = {

}

function dadosFormulario() {
    meuConteudo.titulo = document.getElementById("titulo-post").value
    console.log( meuConteudo.titulo)
    meuConteudo.autor = document.getElementById("autor-post").value
    console.log(meuConteudo.autor)
    meuConteudo.post = document.getElementById("conteudo-post").value
    console.log(meuConteudo.post)
    
    campoPost = document.getElementById("container-de-posts")

    campoPost.innerHTML += `<h2>${meuConteudo.titulo}</h2>\n<h5>${meuConteudo.autor}</h5>\n<p>${meuConteudo.post}</p>`


    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""
}