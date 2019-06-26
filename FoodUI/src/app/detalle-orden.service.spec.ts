import { TestBed } from '@angular/core/testing';

import { DetalleOrdenService } from './detalle-orden.service';

describe('DetalleOrdenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleOrdenService = TestBed.get(DetalleOrdenService);
    expect(service).toBeTruthy();
  });
});
