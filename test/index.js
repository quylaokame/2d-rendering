import {Renderer} from "../lib/renderer/Renderer.js";
import {Loader} from "../lib/resource/Loader.js";
import {Container} from "../lib/display/Container.js";
import {Sprite} from "../lib/display/Sprite.js";


window.addEventListener("load", function () {
    var myCanvas = document.getElementById("GameCanvas");
    var renderer = new Renderer(myCanvas);

    init();

    function init() {

        var layerItem = new Container(renderer);
        renderer.addChild(layerItem);

        var mycar = new Sprite(renderer, "./assets/myCar.png");
        layerItem.addChild(mycar);
        mycar.x = 100;
        mycar.y = 200;
        mycar.width = 50;
        mycar.height = 100;

        var redCar = new Sprite(renderer, "./assets/redCar.png");
        layerItem.addChild(redCar);
        redCar.x = 100;
        redCar.y = 150;
        redCar.width = 50;
        redCar.height = 100;
    }

});
