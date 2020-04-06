import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBookDetailComponent } from './issued-book-detail.component';

describe('IssuedBookDetailComponent', () => {
  let component: IssuedBookDetailComponent;
  let fixture: ComponentFixture<IssuedBookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedBookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
