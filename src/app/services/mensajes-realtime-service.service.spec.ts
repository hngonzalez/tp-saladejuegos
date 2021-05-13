import { TestBed } from '@angular/core/testing';

import { MensajesRealtimeServiceService } from './mensajes-realtime-service.service';

describe('MensajesRealtimeServiceService', () => {
  let service: MensajesRealtimeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensajesRealtimeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
