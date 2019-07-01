export class TextStyle{
    constructor(){
        this._fontFamily = 'Arial';
        this._fontSize = '14px';
        this._fill = '#ffffff';
        this._fontWeight = 'normal';
        this._align = 'left';
        this._stroke = '#dddddd'
    }
    
    // fontFamily
    get fontFamily(){
        return this._fontFamily;
    }
    set fontFamily(value){
        this._fontFamily = value;
    } 
    
    // fontSize
    get fontSize(){
        return this._fontSize;
    }
    set fontSize(value){
        this._fontSize = value;
    } 
    
    // color
    get fill(){
        return this._fill;
    }
    set fill(value){
        this._fill = value;
    } 

    // fontWeight 
    get fontWeight(){
        return this._fontWeight;
    }
    set fontWeight(value){
        this._fontWeight = value;
    } 

    // text Align
    get align(){
        return this._align;
    }
    set align(value){
        this._align = value;
    } 

    //stroke Color
    get stroke(){
        return this._stroke;
    }
    set stroke(value){
        this._stroke = value;
    } 

}