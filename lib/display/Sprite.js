/**
 * @param url
 * @memberOf Engine
 */
export class Sprite{
    constructor(renderer,texture){
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.renderer = renderer;
        this.texture = texture;
    }

    set x (x){
        this.update();
    }

    set y (y){
        this.update();
    }

    get width(){
        return this.texture.naturalWidth;
    }

    set width(w){
        this.update();
    }

    get height(){
        return this.texture.naturalHeight;
    }

    set height(h){
        this.update();
    }

    update(){

    }

    render(){
        this.renderer.context2d.drawImage(this.texture, this.x,this.y);
    }

}