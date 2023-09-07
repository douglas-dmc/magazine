import { desenharProdutoNoCarrinhoSimples, lerLocalStorage } from "./utilidades"

function criarPedidoHistorico(pedido) {
    const elementoPedido = `<p class="text-lg text-bold my-4">${new Date(
        pedido.dataPedido
    ).toLocaleDateString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</p>
    <section id="continer-produto-${
        pedido.dataPedido
    }" class="bg-slate-300 p-3 rounded-md"></section>`

    const main = document.getElementsByTagName("main")[0]
    main.innerHTML += elementoPedido

    for (const idProduto in pedido.pedido) {
        desenharProdutoNoCarrinhoSimples(
            idProduto,
            `container-produto-${pedido.dataPedido}`,
            pedido.pedido[idProduto]
        )
    }
}

function renderizarHistoricoPedidos() {
    const historico = lerLocalStorage("historico")
    for (const pedido of historico) {
        criarPedidoHistorico(pedido)
    }
}

renderizarHistoricoPedidos()
