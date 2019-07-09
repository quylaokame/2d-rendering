export class Controller{
    constructor(game){
        this.input = new DEMO.Input();
        this.gameMovie = game.gameMovie;
        this.initEvents();
    }

    initEvents(){
        this.input.keydown('ArrowLeft', () => {this.gameMovie.moveLeft();});
        this.input.keydown('ArrowRight', () => {this.gameMovie.moveRight();});
        this.input.keydown('Space', () => {this.gameMovie.startGame();});
    }

}