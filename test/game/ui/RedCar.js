export class RedCar extends DEMO.Sprite {
    constructor() {
        super("./assets/redCar.png");
        this.width = 50;
        this.listPosX = [135, 215];
        this.x = 215;
        this.y = -100;
        this.height = 100;
        this.duration = 5000;
    }

    run(onUpdate) {
        gameRenderer.tween(this, this.duration, { y: 400}, () => {
            this.reset();
            this.run();
        }, onUpdate);
    }

    stop(){
        gameRenderer.killTweenOf(this);
    }

    reset(){
        this.randomPositionX();
        this.y = -100;
    }

    randomPositionX(){
        let index = Math.round(Math.random());
        this.x = this.listPosX[index];
    }

}