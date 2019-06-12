/**
 * @param url
 * @memberOf Engine
 */
export class Sprite {
    constructor(renderer, texture) {
        this._x = 0;
        this._y = 0;
        this._width = texture.naturalWidth || 1;
        this._height = texture.naturalHeight || 1;
        this.renderer = renderer;
        this.texture = texture;
    }

    get x() {
        return this._x;
    }

    set x(valueX) {
        this._x = valueX;
        this.update();
    }

    get y() {
        return this._y;
    }

    set y(valueY) {
        this._y = valueY;
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

    render() {
        this.renderer.context2d.drawImage(this.texture, this.x, this.y, this.width, this.height);
    }

}