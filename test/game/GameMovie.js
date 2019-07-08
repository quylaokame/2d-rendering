import { RedCar } from "./ui/RedCar.js";

export class GameMovie extends DEMO.Container {
    constructor() {
        super();

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
        this.effectMoveRoad();
    }

    effectMoveRoad() {
        gameRenderer.tween(this.bg, 3000, { y: 0 }, function () {
            this.bg.y = -400;
            this.effectMoveRoad();
        }.bind(this));
    }

    initItems() {

        if (!this.mycar) {
            this.mycar = new DEMO.Sprite("./assets/myCar.png");
            this.layerItem.addChild(this.mycar);
            this.mycar.x = 135;
            this.mycar.y = 280;
            this.mycar.width = 50;
            this.mycar.height = 100;
        }

        if (!this.listRedCar) {
            this.listRedCar = [];

            for (let i = 0; i < 2; i++) {
                var redCar = new RedCar();
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
            this.txtScore = new DEMO.Text("0", {
                fill: '#cd0000',
                fontSize: '20px'
            });
            this.layerItem.addChild(this.txtScore);
            this.txtScore.x = 345;
            this.txtScore.y = 200;
        }

        this.startGame();
    }

    moveRight() {
        if (this.mycar.x < 250)
            this.mycar.x += 3;
    }

    moveLeft() {
        if (this.mycar.x > 110)
            this.mycar.x -= 5;
    }

    startGame() {
        let delayTime = this.duration * 1.5;
        this.listRedCar[0].run(() => { this.detectCollision() });
        this.startSecond = setTimeout(() => { this.listRedCar[1].run(this.detectCollision.bind(this)) }, delayTime);
    }

    detectCollision() {
        for (let i = 0; i < 2; i++) {
            let redCar = this.listRedCar[i];
            if (Math.abs(this.mycar.x - redCar.x) <= 50 && Math.abs(this.mycar.y - redCar.y) <= 100) {
                this.isExplosive = true;
                this.endGame();
            }
        }
    }

    endGame() {
        gameRenderer.killTweenOf(this.bg);
        for (let i = 0; i < this.listRedCar.length; i++) {
            this.listRedCar[i].stop();
        }
        clearTimeout(this.startSecond);
    }

    initEffect() {

    }
}