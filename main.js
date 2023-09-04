const produto1 = {
    nome: "Casaco Branco",
    marca: "Zara",
    preco: 70,
    nomeArquivoImage: "produto-1.jpg"
}

const cartaoProduto = `<div id="card-produto-1">
<img src="./assets/img/${produto1.nomeArquivoImage}" alt="Produto 1 do magazine" style="height: 300px;">
<p>${produto1.marca}</p>
<p>${produto1.nome}</p>
<p>R$${produto1.preco}</p>
<button>Adicionar</button>
</div>`

document.getElementById("container-produto").innerHTML += cartaoProduto