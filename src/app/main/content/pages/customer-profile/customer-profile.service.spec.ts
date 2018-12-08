import { TestBed } from '@angular/core/testing';

import { CustomerProfileService } from './customer-profile.service';
import { HttpClientModule } from '@angular/common/http';

describe('CustomerProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: CustomerProfileService = TestBed.get(CustomerProfileService);
    expect(service).toBeTruthy();
  });
});
