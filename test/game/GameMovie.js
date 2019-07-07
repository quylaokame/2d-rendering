export class GameMovie extends DEMO.Container {
    constructor() {
        super();
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
        this.layerBackground.addChild(this.bg);
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

        this.redCar = new DEMO.Sprite("./assets/redCar.png");
        this.layerItem.addChild(this.redCar);
        this.redCar.x = 215;
        this.redCar.y = -100;
        this.redCar.width = 50;
        this.redCar.height = 100;

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
        

        this.moveRedCar();
    }

    moveRedCar() {
        gameRenderer.tween(this.redCar, 6000, { y: 400 }, function () {
            this.redCar.y = -100;
            this.moveRedCar();
        }.bind(this))
    }

    initEffect() {

    }
}