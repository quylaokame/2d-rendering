export class Keyboard{

    keypress(code, callback) {

        document.addEventListener('keypress', e => {
            
            if (e.code === code) callback()

        })
        
    }

    keydown(code, callback) {

        document.addEventListener('keydown', e => {
            
            if (e.code === code) callback()

        })

    }

    keyup(code, callback) {

        document.addEventListener('keyup', e => {
            
            if (e.code === code) callback()

        })

    }

}