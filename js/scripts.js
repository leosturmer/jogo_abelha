
// Configurando o Canvas

const canvas = document.getElementById("canvas").getContext("2d");

// Criando as instâncias dos objetos reais 

var bee = new Bee(200, 500, 100, 100, "assets/bee1.png");
var spider = new Spider(100, 100, 100, 100, "assets/spider1.png");

var bg = new Bg(0, 0, 500, 900, "assets/bg.png");
var bg2 = new Bg(0, -900, 500, 900, "assets/bg.png");

var flower = new Flower(0, 0, 50, 50, "assets/flower1.png");

var text_points = new Text();
var text_lifes = new Text();
var gameover = new Text();

var play = true;


// Os "escutadores" de eventos (Event Listeners)
// Configurando teclas de navegabilidade

document.addEventListener("keydown", function(event){
    if (event.key === "a" || event.key === "A") {
        bee.dir = -5;
    }
    if (event.key === "d" || event.key === "D"){
        bee.dir = +5;
    }

});

// document.addEventListener("keyup", function(event){
//     if (event.key === "a") {
//         bee.dir = 0;
//     }        
//     if (event.key === "d") {
//         bee.dir = 0;
//     };
// });

document.addEventListener("keydown", function(event) {
    if (event.key === " "){
        if (play === false){
            restart();
        }
    }
});


// Funções básicas do projeto - Game loop


function collides() {
    if (bee.collide(spider)) {
        bee.lifes -= 1;
        spider.respaw();
    };
    
    if (bee.collide(flower)){
        bee.pts += 1;
        flower.respaw();

        if (bee.pts > 0 && bee.pts % 10 === 0){
            if (bee.lifes < 5){
                bee.lifes += 1;
            }
        }
    }
}



function gameOver() {
    if (bee.lifes <= 0){
        play = false;
    }
}

// Função responsavel pela parte visual, tudo o que envolve desenho (Formas, imagens, textos, etc)

function draw () {
    bg.draw();
    bg2.draw();

    if (play){ 
        bee.draw();
        spider.draw();
        flower.draw();    

        text_points.draw(`${bee.pts}`, 240, 100, "white");
        text_lifes.draw(`${bee.lifes}`, 40, 100, "red");
    } else {
        gameover.draw("Game Over!", 150, 400, "white");
    }
};

// Função de lógica: cálculos, mudanças de posição de personagens, verificação de colisão

function update () {
    bg.move(3, 900, 0);
    bg2.move(3, 0, -900);

   if (play){
        bee.move();
        bee.animation("bee", 4);

        spider.move();
        spider.animation("spider", 4);

        flower.move();
        flower.animation("flower", 2);

        collides();
        gameOver();
    } 


};


function restart () {
    play = true;
    bee.lifes = 3;
    bee.pts = 0;
    draw();
    update();
}


// Gerenciador, função que coordena o ciclo de vida de cada quadro (Frame)

function main () {
    canvas.clearRect(0, 0, 500, 900);
    update();
    draw();

};

// Motor - Executar a função main a cada 10ms

setInterval(main, 10);

// requestAnimationFrame();





