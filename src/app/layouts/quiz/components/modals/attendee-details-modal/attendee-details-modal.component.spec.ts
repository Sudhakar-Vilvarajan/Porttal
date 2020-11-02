import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeDetailsModalComponent } from './attendee-details-modal.component';

describe('AttendeeDetailsModalComponent', () => {
  let component: AttendeeDetailsModalComponent;
  let fixture: ComponentFixture<AttendeeDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
