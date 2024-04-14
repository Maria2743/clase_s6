export default class cliente {

    constructor(nombre, impuestos) {

        this._nombre = nombre;
        this._impuestos = impuestos
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombreNuevo) {
        this._nombre = nombreNuevo;
        return
    }

    calcularImpuestos() {

        return console.log(`El impuesto total a pagar es: ${(this._impuestos.montoBrutoAnual() - this._impuestos.deducciones()) * 0.21}`)
    }

}