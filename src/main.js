import cliente from './cliente.js';
import impuestos from './impuesto.js';

let primerImpuesto = new impuestos(100, 20);

let primerCliente = new cliente("Maria", new impuestos(500, 30))
let segundoCliente = new cliente("Facundo", primerImpuesto)

console.log(primerImpuesto);