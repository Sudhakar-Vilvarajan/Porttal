import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterscreenComponent } from './centerscreen.component';

describe('CenterscreenComponent', () => {
  let component: CenterscreenComponent;
  let fixture: ComponentFixture<CenterscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
