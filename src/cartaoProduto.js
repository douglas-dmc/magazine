import { catalogo } from "./utilidades"

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2 flex flex-col p-2 justify-between' id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/img/${produtoCatalogo.imagem}" alt="Produto ${produtoCatalogo.id} do magazine">
        <p>${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>R$${produtoCatalogo.preco}</p>
        <button><i class="fa-solid fa-cart-plus"></i></button>
        </div>`

        document.getElementById("container-produto").innerHTML += cartaoProduto
    }
}
