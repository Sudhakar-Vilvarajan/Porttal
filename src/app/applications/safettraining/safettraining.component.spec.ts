import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafettrainingComponent } from './safettraining.component';

describe('SafettrainingComponent', () => {
  let component: SafettrainingComponent;
  let fixture: ComponentFixture<SafettrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafettrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafettrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
