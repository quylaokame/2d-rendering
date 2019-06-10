/**
 * @memberOf Engine
 * just Implement to load Images
 */

export class Loader{

    constructor(){
        this.atlas = {textures:{}};
        this.urlRegister = [];
        this.onLoaded = null;
    }

    addImage(name,url){

        if(this.urlRegister.indexOf(url) === -1){
            this.urlRegister.push(url);
            var img = new Image();
            img.src = url;
            img.onload = this.cacheImage.bind(this,name,img); 
        }
        
    }

    cacheImage(name,img){
        this.atlas.textures[name] = img;
        this.isComplete = true;
        if(typeof (this.onLoaded) === 'function')
            this.onLoaded();
    }

}