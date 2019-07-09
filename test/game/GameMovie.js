import { RedCar } from "./ui/RedCar.js";

export class GameMovie extends DEMO.Container {
    constructor() {
        super();
        this.widthCar = 50;
        this.heightCar = 100;
        this.duration = 5000;
        this.init();
    }

    init() {
        this.initLayer();
        this.initBackground();
        this.initItems();
        this.initEffect();
    }

    initLayer() {
        if (!this.layerBackground) {
            this.layerBackground = new DEMO.Container();
            this.addChild(this.layerBackground);
        }

        if (!this.layerItem) {
            this.layerItem = new DEMO.Container();
            this.addChild(this.layerItem);
        }

        if (!this.layerEffect) {
            this.layerEffect = new DEMO.Container();
            this.addChild(this.layerEffect);
        }
    }

    initBackground() {
        this.bg = new DEMO.Sprite("./assets/background.png");
        this.bg.y = -400;
        this.layerBackground.addChild(this.bg);
    }

    initItems() {

        if (!this.mycar) {
            this.mycar = new DEMO.Sprite("./assets/myCar.png");
            this.layerItem.addChild(this.mycar);
            this.mycar.x = 135;
            this.mycar.y = 280;
            this.mycar.width = this.widthCar;
            this.mycar.height = this.heightCar;
        }

        if (!this.listRedCar) {
            this.listRedCar = [];

            for (let i = 0; i < 2; i++) {
                var redCar = new RedCar();
                redCar.width = this.widthCar;
                redCar.height = this.heightCar;
                redCar.duration = this.duration;
                this.layerItem.addChild(redCar);
                this.listRedCar.push(redCar);
            }

        }

        if (!this.labelScore) {
            this.labelScore = new DEMO.Text("Score", {
                fill: '#cd0000',
                fontSize: '20px'
            });
            this.layerItem.addChild(this.labelScore);
            this.labelScore.x = 330;
            this.labelScore.y = 160;
        }

        if (!this.txtScore) {
            this.txtScore = new DEMO.Text(this.score, {
                fill: '#cd0000',
                fontSize: '20px'
            });
            this.layerItem.addChild(this.txtScore);
            this.txtScore.x = 345;
            this.txtScore.y = 200;
        }

    }

    initEffect() {
        this.spriteBoom = new DEMO.Sprite("./assets/boom.png");
        this.layerEffect.addChild(this.spriteBoom);
        this.spriteBoom.width = 100;
        this.spriteBoom.height = 100;
        this.spriteBoom.visible = false;
    }

    effectMoveRoad() {
        gameRenderer.tween(this.bg, 3000, { y: 0 }, () => {
            this.bg.y = -400;
            this.effectMoveRoad();
        });
    }

    moveRight() {
        if (this.mycar.x < 250 && this.isPlaying)
            this.mycar.x += 3;
    }

    moveLeft() {
        if (this.mycar.x > 110 && this.isPlaying)
            this.mycar.x -= 5;
    }

    startGame() {
        this.isPlaying = true;
        this.resetGame();
        this.effectMoveRoad();

        let delayTime = this.duration * 0.5;
        this.listRedCar[0].run(() => {
            this.detectCollision()
        });
        this.startSecond = setTimeout(() => {
            this.listRedCar[1].run(this.detectCollision.bind(this))
        }, delayTime);
    }

    detectCollision() {
        for (let i = 0; i < 2; i++) {
            let redCar = this.listRedCar[i];
            if (Math.abs(this.mycar.x - redCar.x) <= 46 && Math.abs(this.mycar.y - redCar.y) <= 94) {
                this.spriteBoom.x = (this.mycar.x + redCar.x + this.widthCar) / 2 - this.spriteBoom.width / 2;
                this.spriteBoom.y = (this.mycar.y + redCar.y + this.heightCar) / 2 - this.spriteBoom.height / 2;
                this.endGame();
            }
        }
    }

    endGame() {
        this.isPlaying = false;
        // stop effect Background
        gameRenderer.killTweenOf(this.bg);
        // stop the red cars
        for (let i = 0; i < this.listRedCar.length; i++) {
            this.listRedCar[i].stop();
        }
        clearTimeout(this.startSecond);
        // show BOOM
        this.spriteBoom.visible = true;
    }

    resetGame() {
        this.mycar.x = 135;
        this.mycar.y = 280;
        this.bg.y = - 400;
        this.spriteBoom.visible = false;
        this.listRedCar.forEach((car) => {
            car.x = 215;
            car.y = -100;
        })
    }
}