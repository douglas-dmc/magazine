import { desenharProdutoNoCarrinhoSimples, lerLocalStorage } from "./utilidades"

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `<p class="text-lg text-bold my-4">${new Date(
         pedidoComData.dataPedido
        ).toLocaleDateString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
    </p>
    <section id="container-produto-${
            pedidoComData.dataPedido
        }" class="bg-slate-300 p-3 rounded-md">
    </section>`

    const main = document.getElementsByTagName("main")[0]
    main.innerHTML += elementoPedido

    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoNoCarrinhoSimples(
            idProduto,
            `container-produto-${pedidoComData.dataPedido}`,
            pedidoComData.pedido[idProduto]
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
