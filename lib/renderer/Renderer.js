/**
 * @param canvasElement
 * @memmerOf Engine
 */

export class Renderer {
    constructor(canvasElement) {
        this.stage = canvasElement;
        this.context2d = this.stage.getContext('2d');
        this.width = this.stage.width;
        this.height = this.stage.height;
        this.children = [];
        this.fps = 60;
        this.deltaTime = 1000 / this.fps;
        this._backgroundColor = "#000000";
        this.globalX = 0;
        this.globalY = 0;
        this.tick();
    }

    get backgroundColor() {
        return this._backgroundColor;
    }

    set backgroundColor(color) {
        this._backgroundColor = color;
    }

    tick() {
        this.update();
        this.render();
        requestAnimationFrame(this.tick.bind(this));
    }

    update() {

    }

    render() {
        this.clear();
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].render()
        }
    }

    addChild(child) {
        child._zIndex = this.children.length;
        child.parent = this;
        this.children.push(child);
        child.updateTransform(this);
    }

    addChildAt(child, index) {
        child._zIndex = index;
        child.parent = this;
        this.children.push(child);
        child.updateTransform(this);
    }

    removeChild(child) {
        this.children.splice(child._zIndex, 1);
        child.parent = null;
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

    clear() {
        this.context2d.clearRect(0, 0, this.width, this.height);
        this.context2d.fillStyle = this.backgroundColor;
        this.context2d.fillRect(0, 0, this.width, this.height);
    }

}
