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

export function adicionarAoCarrinho(){
    const cartaoProdutoCarrinho = `<article class="flex bg-slate-100 rounded-lg p-1 relative">
    <button id="fechar-carrinho" class="absolute top-0 right-2">
        <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
    </button>
    <img
        src="./assets/img/product-1.jpg"
        alt="Carrinho: produto 1"
        class="h-24 rounded-lg"
    />
    <div class="py-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">Camisa Larga com Bolsos</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">R$70</p>
    </div>
</article>`

const containerProdutoCarrinho = document.getElementById("produtos-carrinho")

containerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho
}