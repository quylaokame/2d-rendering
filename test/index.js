import {Renderer} from "../lib/renderer/Renderer.js";
import {Container} from "../lib/display/Container.js";
import {Sprite} from "../lib/display/Sprite.js";


window.addEventListener("load", function () {
    var myCanvas = document.getElementById("GameCanvas");
    var renderer = new Renderer(myCanvas);

    init();

    function init() {

        var layerItem = new Container();
        renderer.screen.addChild(layerItem);

        layerItem.x = 20;
        layerItem.y = 20;

        var mycar = new Sprite("./assets/myCar.png");
        layerItem.addChild(mycar);
        mycar.x = 200;
        mycar.y = 400;
        mycar.width = 50;
        mycar.height = 100;

        var redCar = new Sprite("./assets/redCar.png");
        layerItem.addChildAt(redCar,0);
        redCar.x = 100;
        redCar.y = 150;
        redCar.width = 50;
        redCar.height = 100;

        runMyCar();
        runRedCar();

        function runMyCar(){
            mycar.y = 400;
            renderer.tween(mycar, 5000, {y: -100}, runMyCar);
        }

        function runRedCar(){
            redCar.y = 400;
            renderer.tween(redCar, 6000, {y: -100}, runRedCar);
        }
    }

});
