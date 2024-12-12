// Importação da base de dados e das funçoes

import { database } from "./database.js";
import { getProdId, loadProducts} from "./functions.js";

// -------- Variaveis do projeto ------------------------
const sectionNovidades = document.querySelector("#section-novidades .carrousel")
const sectionMaisVendidos = document.querySelector("#section-maisvendidos .carrousel")
const sectionPromocoes = document.querySelector("#section-promocoes .carrousel")


//Fitros
let filtroCategoriaNovidades = database.filter(produto => produto.classificacaoProduto === "Novidades" && produto.exibirHome == true )
let filtroMaisVendidos = database.filter(produto => produto.classificacaoProduto === "Mais_Vendidos" && produto.exibirHome == true )
let filtroPromocoes = database.filter(produto => produto.classificacaoProduto === "Promocoes" && produto.exibirHome == true )


//Funçoes com parametros
loadProducts(filtroCategoriaNovidades,sectionNovidades);
loadProducts(filtroMaisVendidos,sectionMaisVendidos);
loadProducts(filtroPromocoes,sectionPromocoes);
getProdId()

let loginBtn = document.querySelector("#login-btn");
let loginFormContainer = document.querySelector(".login-form-container");
let closeLoginForm = document.querySelector("#close-login-form");

// Abre o formulário de login ao clicar no botão
loginBtn.onclick = () => {
  loginFormContainer.classList.toggle("active");
};

// Fecha o formulário de login ao clicar no botão de fechar
closeLoginForm.onclick = () => {
  loginFormContainer.classList.remove("active");
};



// Efeito parallax ao mover o mouse na seção .home
document.querySelector('.home').onmousemove = (e) => {
  document.querySelectorAll('.home-parallax').forEach(elm => {
    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90; 

    elm.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

// Restaura a posição do parallax quando o mouse sai da área .home
document.querySelector('.home').onmouseleave = () => {
  document.querySelectorAll('.home-parallax').forEach(elm => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};


// Função para fechar o formulário
closeLoginForm.onclick = () => {
  loginFormContainer.classList.remove("active");
};

// Função para validar o login
loginForm.onsubmit = (e) => {
  e.preventDefault();  // Evita o envio real do formulário

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  // Verifica se os campos não estão vazios
  if (email === "" || password === "") {
    alert("Please fill in both fields!");
    return;
  }

  // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
  // Exemplo: usando fetch ou AJAX para enviar os dados para um servidor (isso requer backend).

  // Para este exemplo, vamos simular uma resposta bem-sucedida de login
  alert("Login successful!");

  // Após login bem-sucedido, você pode fechar o formulário e limpar os campos
  loginFormContainer.classList.remove("active");
  loginForm.reset(); // Limpa os campos de entrada
};

// Lógica para abrir e fechar o formulário de login (se necessário)
document.querySelector("#login-btn").onclick = () => {
  loginFormContainer.classList.toggle("active");
};





// ------- carrousel de imagens home -------------------

document.querySelectorAll('.section-product').forEach( carrousel => {
const productCarousel = carrousel.querySelector('.carrousel');
const prevBtn = carrousel.querySelector('.prev');
const nextBtn = carrousel.querySelector('.next');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
  scrollAmount += 340; // Largura do produto + margem
  if (scrollAmount > productCarousel.scrollWidth - carrousel.offsetWidth) {
    scrollAmount = productCarousel.scrollWidth - carrousel.offsetWidth;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
  scrollAmount -= 340; // Largura do produto + margem
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
  productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
});
})

