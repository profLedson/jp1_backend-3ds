// arrays são agrupamento de dados
// -> sequências ordenadas
// -> indexadas a partir de ZERO (0,1,2,..)
// -> Estruturas homogêneas / heterogêneas
// -> possuem vários métodos nativos (ordenar, adicionar, remover, ...)
// -> Podem ser aninhadas com outras estruturas (arrays, funções, objetos)

const produtosLoja = ["camisa", "short", "tênis"]
                  //     0         1        2
produtosLoja[3] = "macarrão"
produtosLoja[33] = "bola"
produtosLoja[30] 
// console.log(produtosLoja[30])

for(let produto of produtosLoja ){
   if(typeof produto != 'undefined'){
  }
  console.log(produto)
}