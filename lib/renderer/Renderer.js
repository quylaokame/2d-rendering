/**
 * @param canvasElement
 * @memmerOf Engine
 */

export class Renderer{
    constructor(canvasElement){
        this.stage = canvasElement;
        this.context2d = this.stage.getContext('2d');
        this.width = this.stage.width;
        this.height = this.stage.height;
        this.children = [];
        this.fps = 60;
        this.deltaTime = 1000/this.fps;
        this.backgroundColor = "#888888";
        
        this.tick();
    }

    tick(){
        this.update();
        this.render();
        setInterval(this.tick.bind(this),this.deltaTime);
    }

    update(){

    }
    
    render(){
        // this.clear();
        // this.screen.fillStyle = 'red';
        // this.screen.fillRect(0,0,30,30);
    
        for(let i = 0; i < this.children.length; i++){
            this.children[i].render();
        }
    }

    addChild(child){
        child._index = this.children.length;
        this.children.push(child);
    }

    removeChild(child){
        this.children.splice(child._index,1);
    }

    clear(){
        this.context2d.clearRect(0, 0, this.width, this.height);
        // this.context2d.fillStyle = this.backgroundColor;
        // this.context2d.fillRect(0,0,this.width,this.height);
    }

}
