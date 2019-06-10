/**
 * @param canvasElement
 * @memmerOf Engine
 */

export class Renderer{
    constructor(canvasElement){
        this.stage = canvasElement;
        this.screen = this.stage.getContext('2d');
        this.width = this.stage.width;
        this.height = this.stage.height;
        this.backgroundColor = "#eeeeee";
        
        this.tick();
    }

    tick(){
        this.update();
        this.render();
        requestAnimationFrame(this.tick.bind(this));
    }

    update(){
        console.log('update');
    }
    
    render(){
        this.clear();
        this.screen.fillStyle = 'red';
        this.screen.fillRect(30,30,40,40);
    }
    
    clear(){
        this.screen.clearRect(0, 0, this.width, this.height);
        this.screen.fillStyle = this.backgroundColor;
        this.screen.fillRect(0,0,this.width,this.height);
    }

}
