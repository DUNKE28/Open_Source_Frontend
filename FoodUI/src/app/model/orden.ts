import { Sede } from './sede';
import { Cliente } from './cliente';
import { DetalleOrden } from './detalleOrden';

export class Orden {
    id:number;
    fecha:Date;
    horaEntrega:Date;
    estado:number;
    sede:Sede[];
    cliente: Cliente[];
    detallesOrden: DetalleOrden[];
}
