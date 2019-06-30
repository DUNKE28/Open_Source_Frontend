import { Insumo } from './insumo';
import { Orden } from './orden';

export class DetalleOrden {
    id:number;
    precio:number;
    cantidad:number;
    insumo:Insumo;
    orden:Orden;
}