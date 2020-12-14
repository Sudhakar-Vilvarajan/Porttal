import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetytrainingComponent } from './safetytraining.component';

describe('SafetytrainingComponent', () => {
  let component: SafetytrainingComponent;
  let fixture: ComponentFixture<SafetytrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetytrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetytrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
