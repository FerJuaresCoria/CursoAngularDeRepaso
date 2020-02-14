import { AbstractControl } from '@angular/forms';

export function VerificarEspacios(c: AbstractControl) {
    //let regExp1 = /(abc){2}/
    //https://regex101.com/
    let regExp1 = /^[a-zA-Z0-9_]*$/
    let valor = c.value

    if(valor == null) return null
    if(!regExp1.test(valor)) {
        return { conEspacios : true}
    }
    return null

    /*
    if(c.value == null) return null
    if(c.value.indexOf(' ') >= 0) {
        return { conEspacios : true}
    }
    return null
    */
}