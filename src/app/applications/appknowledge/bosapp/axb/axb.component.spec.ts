import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxbComponent } from './axb.component';

describe('AxbComponent', () => {
  let component: AxbComponent;
  let fixture: ComponentFixture<AxbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
