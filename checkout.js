import { apagarDoLocalStorage, desenharProdutoNoCarrinhoSimples, lerLocalStorage, salvarLocalStorage } from "./src/utilidades";


function desenharProdutoCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho")
    for (const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoNoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto])
    }
}


function finalizarCompra(e){
    e.preventDefault()

    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {}
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return
    }

    const dataAtual = new Date()
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade
    }

    const historicoDePedidos = lerLocalStorage("historico") ?? []
    const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos]

    salvarLocalStorage("historico", historicoDePedidosAtualizados)
    apagarDoLocalStorage("carrinho")
    
    window.location.href = window.location.origin + "/pedidos.html"
}

desenharProdutoCheckout()

document.addEventListener("submit", (e) => finalizarCompra(e))