//Variáveis
let img = document.getElementById("img");
let obs = document.getElementById("obs");
let btnVermelho = document.getElementById("btnVermelho");
let btnAmarelo = document.getElementById("btnAmarelo");
let btnVerde = document.getElementById("btnVerde");
let btnAutomatico = document.getElementById("btnAutomatico");
let btnDesligar = document.getElementById("btnDesligar");
let containerBtns = document.getElementById("containerBtns");

//Funções
let descobrirBtn = (event) => {
  switch (event.target.id) {
    case "btnVermelho":
      ligarVermelho();
      break;
    case "btnAmarelo":
      ligarAmarelo();
      break;
    case "btnVerde":
      ligarVerde();
      case "btnAutomatico":
            automatico();
            break;
      break;
    case "btnDesligar":
      desligar();
      break;
    default:
      break;
  }
};

function ligarVermelho() {
  return (img.src = "./imagens/vermelho.png");
}
function ligarAmarelo() {
  return (img.src = "./imagens/amarelo.png");
}
function ligarVerde() {
  return (img.src = "./imagens/verde.png");
}
function automatico() {
  
  
}
function desligar() {
  return (img.src = "./imagens/desligado.png");
}

//Ações dos botões
// btnVermelho.addEventListener('click',ligarVermelho);
// btnAmarelo.addEventListener('click',ligarAmarelo);
// btnVerde.addEventListener('click',ligarVerde);
// btnAutomatico.addEventListener('click',automatico);
// btnDesligar.addEventListener('click',desligar);
containerBtns.addEventListener("click", descobrirBtn);
