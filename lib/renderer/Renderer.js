import {Container} from "../display/Container.js";

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
        this.globalX = 0;
        this.globalY = 0;
        this._backgroundColor = "#000000";

        this.screen = new Container();
        this.screen.renderer = this;
        this.screen.updateTransform(this);
        this.screen.parent = this;

        this.fps = 60;
        this.deltaTime = 1000 / this.fps;
        this.startTime =  + new Date();
        this.tickers = [];
        this.loop();
    }

    get backgroundColor() {
        return this._backgroundColor;
    }

    set backgroundColor(color) {
        this._backgroundColor = color;
    }

    addTicker(func){
        let ticker = {update: func, done: false};
        this.tickers.push(ticker);
        return ticker;
    }

    loop() {

        let currentTime =  + new Date();

        if ( currentTime - this.startTime >= this.deltaTime ) {

            for(let i = 0; i < this.tickers.length; i++){
                if(this.tickers[i].done === false)
                    this.tickers[i].update()
                else
                    this.tickers.splice(i,1);
            }

            this.startTime = currentTime;

        }

        this.render();

        requestAnimationFrame(() => { this.loop() })

    }

    update() {
        if(this.isChange === true){
            this.render();
        }
    }

    render() {
        this.clear();
        this.screen.render();
    }

    clear() {
        this.context2d.clearRect(0, 0, this.width, this.height);
        this.context2d.fillStyle = this.backgroundColor;
        this.context2d.fillRect(0, 0, this.width, this.height);
    }

    tween(target, duration, props, callback) {

        if ( target ) {

            let startTime = Date.now();
            let clone = {}

            Object.keys(props).forEach(key => {
                clone[key] = target[key];
            })
            
            let tick = this.addTicker(tweenUnit);

            function tweenUnit(){

                let currentTime = Date.now();
                let time = currentTime - startTime;
                
                Object.keys(props).forEach(key => {

                    let percentage = time / duration;
                    let valueDiff = props[key] - clone[key];
                    target[key] =  clone[key] + ( percentage * valueDiff );

                    if ( time >= duration ) 
                        target[key] = props[key];
                    
                })

                if ( time >= duration ) {
                    tick.done = true;
                    if ( callback && typeof callback === "function" ) {
                        callback();
                    }
                }
            }            
        }
    }

    keyFrame( target, frames, callback ){

        if(frames.length > 0){
            var _this = this;
            keyFrameUnit(0);
        }

        function keyFrameUnit(index){
            let frame = frames[index];
            let props = frame.props;
            let duration = frame.duration;

            if(index !== frames.length - 1){
                _this.tween(target, duration, props, function(){
                    keyFrameUnit(index + 1);
                });
            } else{
                if (callback && typeof callback === 'function'){
                    _this.tween(target, duration, props, callback);
                }else{
                    _this.tween(target, duration, props);
                }
            }
            
        }
    }

}