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

        layerItem.x = 0;
        layerItem.y = 0;

        var mycar = new Sprite("./assets/myCar.png");
        layerItem.addChild(mycar);
        mycar.x = 350;
        mycar.y = 300;
        mycar.width = 50;
        mycar.height = 100;

        var frames = [
            {
                props: {x: 350,y:0},
                duration: 1000
            },
            {
                props: {x: 0, y:0},
                duration: 1000
            },
            {
                props: {x: 0, y:300},
                duration: 1000
            },
            {
                props: {x: 350, y:300},
                duration: 1000
            }
        ]

        function loopMove(){
            renderer.keyFrame(mycar,frames,loopMove);
        }

        loopMove();


    }

});
