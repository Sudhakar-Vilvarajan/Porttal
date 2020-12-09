import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailmanagerComponent } from './railmanager.component';

describe('RailmanagerComponent', () => {
  let component: RailmanagerComponent;
  let fixture: ComponentFixture<RailmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
