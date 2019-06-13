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
        this.update();
    }

    get y() {
        return this._y;
    }

    set y(y) {
        this._y = y;
        this.update();
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

    updateTexture() {
        this.width = this._width === 0 ? this.texture.naturalWidth : this._width;
        this.height = this._height === 0 ? this.texture.naturalHeight : this._height;
        this.renderable = true;
    }

    render() {
        if (this.renderable)
            this.renderer.context2d.drawImage(this.texture, this.x, this.y, this.width, this.height);
    }

}