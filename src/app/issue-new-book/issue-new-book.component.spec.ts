import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueNewBookComponent } from './issue-new-book.component';

describe('IssueNewBookComponent', () => {
  let component: IssueNewBookComponent;
  let fixture: ComponentFixture<IssueNewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueNewBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
