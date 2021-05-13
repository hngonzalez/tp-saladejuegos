import { TestBed } from '@angular/core/testing';

import { MensajesFirestoreServiceService } from './mensajes-firestore-service.service';

describe('MensajesFirestoreServiceService', () => {
  let service: MensajesFirestoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajesFirestoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
