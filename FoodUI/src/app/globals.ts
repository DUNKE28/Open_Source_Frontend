import { Injectable } from '@angular/core';
import { DetalleOrden } from './model/detalleOrden';

@Injectable()
export class Globals {
    carrito: Array<DetalleOrden>=[];
}