import { Sede } from './sede';
import { Cliente } from './cliente';
import { DetalleOrden } from './detalleOrden';
import { Time } from '@angular/common';

export class Orden {
    id:number;
    estado:number;
    sede:Sede;
    cliente: Cliente;
    detallesOrden: Array<DetalleOrden>;
}
