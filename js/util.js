// Conterá a definição da forma. Não executa nada, apenas guarda a regra de como um objeto deve ser

// POO

class Obj {
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    };

    // Encapsulando 

    draw () {
        // canvas.fillStyle = this.color;
        // canvas.fillRect(this.x, this.y, this.width, this.height);

        var img = new Image();
        img.src = this.color;
        canvas.drawImage(img, this.x, this.y, this.width, this.height);
    };

    // Definir imagem de animação e contador interno
    frame = 1; // Define qual imagem da animação será exibida inicialmente
    timer = 0; // Contador interno para controlar a velocidade de troca de frames

    animation (nome, limit) {
        this.timer += 1;
        if (this.timer > 10) {
            this.timer = 0;
            this.frame += 1;
        } 
        if (this.frame > limit) { // verifica o limite do frame 
            this.frame = 1;
        }

        // Mostra o caminho do arquivo de imagem
        this.color = "assets/" + nome + this.frame + ".png";
    };

}

class Bee extends Obj {
    dir = 0;

    move () {
        this.x += this.dir; // Movimento da abelha
    };

    collide(obj) {
        if (this.x > obj.x + obj.width &&
            this.x + this.width > obj.x &&
            this.y < obj.y + obj.height &&
            this.y + this.height > obj.y
        ) {
            console.log("Colidiu!");
        }else{
            console.log("Não colidiu!");
        }
    };
    
}

class Spider extends Obj {

    move(){
        this.y += 4; // Move a arenha para baixo
    

        if (this.y > 900) {
            this.y = -50;
            this.x = Math.random() * (400 - 0);
        };

    }
}

class Bg extends Obj {
    move(speed, limit, pos) {
        this.y += speed;
        
        if (this.y > limit) {
            this.y = pos;
        }
    }
}

class Flower extends Spider {

}

class Text {
    draw(text, x, y, color) {
        canvas.font = "40px Arial"
        canvas.fillStyle = color;

        canvas.fillText(text, x, y);
    }
}