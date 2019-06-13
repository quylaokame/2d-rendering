/**
 * @param url
 * @memberOf Engine
 */
export class Container {
    constructor(renderer) {
        this._x = 0;
        this._y = 0;
        this._width = 1;
        this._height = 1;
        this.renderer = renderer;
        this.children = [];
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
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].width > this._width)
                this._width = this.children[i].width;
        }
        return this._width;
    }

    get height() {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].height > this._height)
                this._height = this.children[i].height;
        }
        return this._height;
    }

    update() {

    }

    addChild(child) {
        child._zIndex = this.children.length;
        this.children.push(child);
    }

    addChildAt(child, index) {
        //add
        child._zIndex = index;
        child.parent = this;
        this.children.splice(child._zIndex, 0, child);
        //update z-index for the another elements
        for (let i = child._zIndex + 1; i < this.children.length; i++) {
            this.children[i]._zIndex++;
        }
    }

    removeChild(child) {
        //remove
        this.children.splice(child._zIndex, 1);
        child.parent = null;
        //update z-index for the another elements
        for (let i = child._zIndex; i < this.children.length; i++) {
            this.children[i]._zIndex--;
        }
    }

    removeChildren() {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i]._zIndex = null;
            this.children[i].parent = null;
        }
        this.children.splice(0, this.children.length);
    }

    render() {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].render();
        }
    }

}