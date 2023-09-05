import { catalogo } from "./utilidades"

const idsProdutoCarrinhoComQuantidade = {}

export function abrirCarrinho(){
    document.getElementById("carrinho").classList.add('right-[0px]')
    document.getElementById("carrinho").classList.remove('right-[-360px]')
}

export function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove('right-[0px]')
    document.getElementById("carrinho").classList.add('right-[-360px]')
}

export function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho")
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho")

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho)
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho)
}

export function adicionarAoCarrinho(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto] = 1

    if (idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQuantidadeProduto(idProduto)
    }

    const produto = catalogo.find((p) => p.id === idProduto)
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho")

    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-carrinho" class="absolute top-0 right-2">
        <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img
        src="./assets/img/${produto.imagem}"
        alt="Carrinho: produto ${produto.nome}"
        class="h-24 rounded-lg"
    />
    <div class="py-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">R$${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <button>-</button>
        <p id="quantidade-${produto.id}" class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
        <button class="ml-2">+</button>
    </div>
</article>`

containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
}

export function incrementarQuantidadeProduto(idProduto){
    incrementarQuantidadeProduto[idProduto]++
    atualizarInformacaoQuantidade(idProduto)
    return
}

export function decrementarQuantidadeProduto(idProduto){
    decrementarQuantidadeProduto[idProduto]--
    atualizarInformacaoQuantidade(idProduto)
    return
}

export function atualizarInformacaoQuantidade(idProduto){
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto]
}
