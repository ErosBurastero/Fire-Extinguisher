import { matafuegos } from '@/assets/data.js'

export default class Matafuego {
    constructor() {
        this.matafuegos = matafuegos
    }

    obtenerMatafuegoColorRosa() {
        return this.matafuegos.title == 'pedo'
    }


}

console.log(Matafuego)