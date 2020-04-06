import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedListingComponent } from './issued-listing.component';

describe('IssuedListingComponent', () => {
  let component: IssuedListingComponent;
  let fixture: ComponentFixture<IssuedListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
