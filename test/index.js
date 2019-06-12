import {Renderer} from "../lib/renderer/Renderer.js";
import {Loader} from "../lib/resource/Loader.js";
import {Sprite} from "../lib/display/Sprite.js";


window.addEventListener("load", function(){
    var myCanvas = document.getElementById("GameCanvas");
    var renderer = new Renderer(myCanvas);

    var loader = new Loader();
    loader.onLoaded = function(){
        init();
    }
    loader.addImage('myCar','./assets/mycar.png');


    function init(){
        var textures = loader.atlas.textures;
        var mycar = new Sprite(renderer, textures['myCar']);
        renderer.addChild(mycar);
        mycar.x = 100;
        mycar.y = 200;
        mycar.width = 50;
        mycar.height = 100;
    }

});
