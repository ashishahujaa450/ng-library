import { TestBed } from '@angular/core/testing';

import { StudentRegisterationService } from './student-registeration.service';

describe('StudentRegisterationService', () => {
  let service: StudentRegisterationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRegisterationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
