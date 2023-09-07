import { desenharProdutoNoCarrinhoSimples, lerLocalStorage } from "./src/utilidades";


function desenharProdutoCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho")
    for (const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoNoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto])
    }
}

desenharProdutoCheckout()