import {Sprite} from "./Sprite.js";
import {TextStyle} from "./TextStyle.js";

export class Text extends Sprite{
    constructor(string, style){
        // extend x, y, width, height, parent, renderer, globalX, globalY from Sprite
        super(null);
        // the attributes for Text
        this._text = string;
        this._style = new TextStyle();
        Object.assign(this._style, style);
    }

    get style(){
        return this._style;
    }

    set style(value){
        this._style = value;
    }

    get text(){
        return this._text;
    }

    set text(value){
        this._text = value;
    }

    updateTexture(){
        this.width = this.renderer.context2d.measureText(this.text).width;
    }

    updateTransform(parent){
        this.globalX = parent.globalX + this.x;
        this.globalY = parent.globalY + this.y;
    }

    render(){
        this.updateTransform(this.parent);
        if(this.renderer){
            this.renderer.context2d.font = this.style.fontSize + " " + this.style.fontFamily;
            this.renderer.context2d.fillStyle = this.style.fill;
            this.renderer.context2d.textAlign = this.style.align;
            this.renderer.context2d.fillText(this.text, this.globalX, this.globalY);
        }
    }
   
}

