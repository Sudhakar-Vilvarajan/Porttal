import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreightmanagerComponent } from './freightmanager.component';

describe('FreightmanagerComponent', () => {
  let component: FreightmanagerComponent;
  let fixture: ComponentFixture<FreightmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
