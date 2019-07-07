import {Renderer} from "../lib/renderer/Renderer.js";
import {Loader} from "./resource/Loader.js";
import {Container} from "./display/Container.js";
import {Sprite} from "./display/Sprite.js";
import{Text} from "./display/Text.js";
import {Keyboard} from "./input/KeyBoard.js";

if(window.DEMO === undefined)
    window.DEMO = (function(){
        var DEMO = {};

        DEMO.Renderer = Renderer;
        DEMO.Loader = Loader;
        DEMO.Container = Container;
        DEMO.Sprite = Sprite;
        DEMO.Text = Text;
        DEMO.Keyboard = Keyboard;

        return DEMO;
    })();

