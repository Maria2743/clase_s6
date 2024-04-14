export default class impuestos {

    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._impuestos = deducciones
    }

    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(nuevoMonto) {
        this._montoBrutoAnual = nuevoMonto;
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(nuevaDeduccion) {
        this._deducciones = nuevaDeduccion;
    }
}

