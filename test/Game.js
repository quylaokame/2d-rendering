import {GameMovie} from "./game/GameMovie.js";
import {Controller} from "./game/Controller.js";

export class Game {
    constructor() {
        //view
        this.gameMovie = new GameMovie();
        //controller
        this.controller = new Controller(this);
    }
}