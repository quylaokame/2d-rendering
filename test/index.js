import {Renderer} from "../lib/renderer/Renderer.js";
import {Container} from "../lib/display/Container.js";
import {Sprite} from "../lib/display/Sprite.js";
import {Keyboard} from "../lib/input/KeyBoard.js";

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

        let myDuration = 5000;

        runMyCar();
        runRedCar();

        function SpeedUp(){
            if(myDuration > 1100)
                myDuration -= 800;
                console("up");
        }

        function SpeedDown(){
            if(myDuration < 6000)
                myDuration += 500;
                console.log("down");
        }

        function runMyCar(){
            mycar.y = 400;
            renderer.tween(mycar, myDuration, {y: -100}, runMyCar);
        }

        function runRedCar(){
            redCar.y = 400;
            renderer.tween(redCar, 1.2 * myDuration, {y: -100}, runRedCar);
        }

        let keyBoard = new Keyboard;
        keyBoard.keydown("ArrowUp", SpeedUp);
        keyBoard.keydown("ArrowDown", SpeedDown);

    }

});
