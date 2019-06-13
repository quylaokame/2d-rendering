/**
 * @param url
 * @memberOf Engine
 */
export class Sprite {
    constructor(renderer, url) {
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this.renderer = renderer;
        this.renderable = false;
        this.globalX = 0;
        this.globalY = 0;
        var image = new Image();
        this.texture = image;
        image.src = url;
        image.onload = this.updateTexture.bind(this);
    }

    get x() {
        return this._x;
    }

    set x(x) {
        this._x = x;
    }

    get y() {
        return this._y;
    }

    set y(y) {
        this._y = y;
    }

    get width() {
        return this._width;
    }

    set width(w) {
        this._width = w;
        this.update();
    }

    get height() {
        return this._height;
    }

    set height(h) {
        this._height = h;
        this.update();
    }

    update() {

    }

    updateTransform(parent){
        this.globalX = parent.globalX + this.x;
        this.globalY = parent.globalY + this.y;
    }

    updateTexture() {
        this.width = this._width === 0 ? this.texture.naturalWidth : this._width;
        this.height = this._height === 0 ? this.texture.naturalHeight : this._height;
        this.renderable = true;
    }

    render() {
        this.updateTransform(this.parent);
        if (this.renderable)
            this.renderer.context2d.drawImage(this.texture, this.globalX, this.globalY, this.width, this.height);
    }

}