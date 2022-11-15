// variables to count the number of balls

const para = document.querySelector('p');
let ballCount = 0;

// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Base class for balls

class Shape {
    constructor(x, y, velX, velY){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

// Class for uncontrolled balls 

class Ball extends Shape {
    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
        this.exists = true;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    //method for bouncing out of 'walls'

    update() {
        if ((this.x + this.size) >= width){
            this.velX = -(this.velX);
        }
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        if((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        if((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    // method to change color when two different balls collides

    collisionDetection() {
        for(const ball of balls) {
            if(!(this === ball) && ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if(distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

// Class for player's ball 

    class EvilCircle extends Shape{
        constructor(x, y,) {
            super(x, y, 20, 20);
            this.color = 'white';
            this.size = 10;

            //
            window.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case ('a' || 'A') :
                        this.x -= this.velX;
                        break;
                    case 'd':
                        this.x += this.velX;
                        break;
                    case 'w':
                        this.y -= this.velY;
                        break;
                    case 's': 
                        this.y += this.velY;
                        break;
                }
            } );
        }
        
        draw() {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 3;
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.stroke();
        }

        checkBounds() {
            if ((this.x + this.size) >= width){
                this.x -= this.size;
            }
            if ((this.x - this.size) <= 0) {
                this.x += this.size;
            }
            if((this.y + this.size) >= height) {
                this.y -= this.size;
            }
            if((this.y - this.size) <= 0) {
                this.y += this.size;
            }
        }
        
        collisionDetection() {
            for(const ball of balls) {
                if(ball.exists) {
                    const dx = this.x - ball.x;
                    const dy = this.y - ball.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
    
                    if(distance < this.size + ball.size) {
                        ball.exists = false;
                        ballCount--;
                        para.textContent = 'Ball count: ' + ballCount;
                    }
                }
            }
        }
    }

    const balls = [];

    while(balls.length < 30) {
        const size = random(10, 20);
        const ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            randomRGB(),
            size
        );

        balls.push(ball);
        ballCount++;
        para.textContent = 'Ball count: ' + ballCount;
    }

    const controlledCircle = new EvilCircle(600, 800);
    

    function loop() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, width, height);
        
        for(const ball of balls) {
            
            if(ball.exists){
                ball.draw();
                ball.update();
                ball.collisionDetection();
           } 

          

           controlledCircle.draw();
           controlledCircle.checkBounds();
           controlledCircle.collisionDetection();

        }
        requestAnimationFrame(loop);
    }
loop();

    
    