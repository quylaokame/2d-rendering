import { Game } from "./Game.js";

window.addEventListener("load", function () {

    var myCanvas = document.getElementById("GameCanvas");
    window.gameRenderer = new DEMO.Renderer(myCanvas);
    window.game = new Game();

    gameRenderer.screen.addChild(game.gameMovie);

});
