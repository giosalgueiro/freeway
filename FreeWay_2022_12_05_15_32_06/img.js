//IMAGENS DO JOGO E SONS

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload (){
imagemEstrada = loadImage("img/estrada.png"); 
imagemAtor = loadImage("img/ator-1.png");
imagemCarro = loadImage("img/carro-1.png");
imagemCarro2 = loadImage("img/carro-2.png");
imagemCarro3 = loadImage("img/carro-3.png");
imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}

