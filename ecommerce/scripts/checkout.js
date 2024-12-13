import {loadCartItem,removeCartItem} from "./functions.js";
let cartItens = JSON.parse(localStorage.getItem("listaCompras")) 
console.log(cartItens);

let cartItensHTML = document.querySelector('#checkout .grid_col_1')
loadCartItem(cartItens,cartItensHTML)
// removeCartItem(cartItens)

removeCartItem(cartItens, cartItensHTML)




