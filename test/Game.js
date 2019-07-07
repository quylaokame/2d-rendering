import {GameBoard} from "./game/GameBoard.js";
import {GameMovie} from "./game/GameMovie.js";
import {Controller} from "./game/Controller.js";

export class Game {
    constructor() {
        //model
        this.gameBoard = new GameBoard();
        //view
        this.gameMovie = new GameMovie();
        //controller
        this.controller = new Controller();
        this.init();
    }

    init(){

    }
}