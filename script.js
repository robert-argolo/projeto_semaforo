//Variáveis vindas do html
let img = document.getElementById("img");
let obs = document.getElementById("obs");
let containerBtns = document.getElementById("containerBtns");
let indexDaCor = 0;
intervaloId = null;

//variáveis com funções
let proximaCor = () => {
    indexDaCor = indexDaCor < 2 ? ++indexDaCor : 0;
    
};

let mudarCorAutomatico = () => {
    let TodasAsCores = ["btnVerde","btnAmarelo","btnVermelho" ];
    let corDaVez = TodasAsCores[indexDaCor];
    acaoBtn[corDaVez]();
    proximaCor();
    
};

let pararAutomatico = () => {
    clearInterval(intervaloId)
    // console.log(pararAutomatico());
}

let descobrirBtn = (eventoClique) => {
    pararAutomatico()
  acaoBtn[eventoClique.target.id]();
};
//objetos com funções dentro
let acaoBtn = {
  btnVermelho: () => (img.src = "./imagens/vermelho.png"),
  btnAmarelo: () => (img.src = "./imagens/amarelo.png"),
  btnVerde: () => (img.src = "./imagens/verde.png"),
  btnDesligar: () => (img.src = "./imagens/desligado.png"),
  btnAutomatico: () => intervaloId = setInterval(mudarCorAutomatico, 1000),
};

//eventos de clique
containerBtns.addEventListener("click", descobrirBtn);
