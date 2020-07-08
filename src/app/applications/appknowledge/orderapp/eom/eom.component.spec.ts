import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EomComponent } from './eom.component';

describe('EomComponent', () => {
  let component: EomComponent;
  let fixture: ComponentFixture<EomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
