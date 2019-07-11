import {GameMovie} from "./game/GameMovie.js";

export class Game {
    constructor() {
        this.score = 0;
    }

    init() {
        //view
        this.gameMovie = new GameMovie();

        this.input = new DEMO.Input();

        this.initEvents();
    }

    initEvents() {
        this.input.keydown('ArrowLeft', () => {
            this.gameMovie.moveLeft();
        });
        this.input.keydown('ArrowRight', () => {
            this.gameMovie.moveRight();
        });
        this.input.keydown('Space', () => {
            this.gameMovie.startGame();
        });
    }

    updateScore(newScore) {
        gameRenderer.tween(this, 300, {score: newScore}, () => {
            this.gameMovie.txtScore.text = this.score;
        }, () => {
            this.gameMovie.txtScore.text = Math.round(this.score).toString();
        })
    }
}