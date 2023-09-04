const catalogo = [
  {
    id: 1,
    nome: "Casaco Branco",
    marca: "Zara",
    preco: 70,
    imagem: "product-1.jpg",
    feminino: false
  },
  {
    id: 2,
    nome: "Sobretudo Azul Marinho",
    marca: "Zara",
    preco: 110,
    imagem: "product-2.jpg",
    feminino: true
  },
];

for (const produtoCatalogo of catalogo) {
  const cartaoProduto = `<div id="card-produto-1">
    <img src="./assets/img/${produtoCatalogo.imagem}" alt="Produto 1 do magazine" style="height: 300px;">
    <p>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>R$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;

  document.getElementById("container-produto").innerHTML += cartaoProduto;
}
