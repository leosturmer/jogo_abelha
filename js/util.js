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

        var img = new Image ();
        img.src = this.color;
        canvas.drawImage(img, this.x, this.y, this.width, this.height);
    };

}

class Bee extends Obj {
    dir = 0;
    
    move () {
        this.x += this.dir; // Movimento da abelha
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