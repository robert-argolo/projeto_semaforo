//Variáveis vindas do html
let img = document.getElementById("img");
let obs = document.getElementById("obs");
let containerBtns = document.getElementById("containerBtns");
let indexDaCor = 0;
let intervaloId = null;
let tempoVerde = 6000;
let tempoAmarelo = 2000;
let tempoVermelho = 4000;

//variáveis com funções
let proximaCor = () => {
    indexDaCor = indexDaCor < 2 ? ++indexDaCor : 0;
    
};

let mudarCorAutomatico = () => {
    let TodasAsCores = ["btnVerde","btnAmarelo","btnVermelho" ];
    let corDaVez = TodasAsCores[indexDaCor];
    acaoBtn[corDaVez]();
    console.log(indexDaCor)
    tempoMudarCor()
    proximaCor();
    
    
};
function tempoMudarCor(){
    if(indexDaCor == 0){

        //tempo cor verde
        pararAutomatico()
        intervaloId = setInterval(mudarCorAutomatico, tempoVerde)
        console.log("Cor verde")

    }else if (indexDaCor == 1){

        //tempo cor Amarela
        console.log("Cor Amarela")
        pararAutomatico()
        intervaloId = setInterval(mudarCorAutomatico, tempoAmarelo )
    }else if (indexDaCor == 2){

        //tempo cor vermelha
        console.log("Cor vemelha")
        pararAutomatico()
        intervaloId = setInterval(mudarCorAutomatico, tempoVermelho )
    }
}
let pararAutomatico = () => {
    clearInterval(intervaloId)
    
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
  btnAutomatico: () => intervaloId = setInterval(mudarCorAutomatico, 2000),
};

//eventos de clique
containerBtns.addEventListener("click", descobrirBtn);
