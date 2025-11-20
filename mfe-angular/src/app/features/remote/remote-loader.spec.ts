import { TestBed } from '@angular/core/testing';

import { RemoteLoader } from './remote-loader';

describe('RemoteLoader', () => {
  let service: RemoteLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
