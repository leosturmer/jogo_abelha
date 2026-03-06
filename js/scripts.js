
// Configurando o Canvas

const canvas = document.getElementById("canvas").getContext("2d");

// Criando as instâncias dos objetos reais 

var bee = new Bee(200, 500, 100, 100, "assets/bee1.png");
var spider = new Spider(100, 100, 100, 100, "assets/spider1.png");

var bg = new Bg(0, 0, 500, 900, "assets/bg.png");
var bg2 = new Bg(0, -900, 500, 900, "assets/bg.png");

var flower = new Flower(0, 0, 50, 50, "assets/flower1.png");

// Os "escutadores" de eventos (Event Listeners)
// Configurando teclas de navegabilidade

document.addEventListener("keydown", function(event){
    if (event.key === "a") {
        bee.dir = -5;
    }
    if (event.key === "d"){
        bee.dir = +5;
    }


});

document.addEventListener("keyup", function(event){
    if (event.key === "a" || event.key === "d") {
        bee.dir = 0;
    };
});




// Funções básicas do projeto - Game loop

// Função responsavel pela parte visual, tudo o que envolve desenho (Formas, imagens, textos, etc)

function draw () {
    bg.draw();
    bg2.draw();

    bee.draw();
    spider.draw();
    flower.draw();    

};

// Função de lógica: cálculos, mudanças de posição de personagens, verificação de colisão

function update () {

    bee.move();
    bee.animation("bee", 4);

    spider.move();
    spider.animation("spider", 4);

    bg.move(3, 900, 0);
    bg2.move(3, 0, -900);

    flower.move();
    flower.animation("flower", 2);
};

// Gerenciador, função que coordena o ciclo de vida de cada quadro (Frame)

function main () {
    canvas.clearRect(0,0, 1280,720);
    update();
    draw();


};

// Motor - Executar a função main a cada 10ms

setInterval(main, 10);

// requestAnimationFrame();





