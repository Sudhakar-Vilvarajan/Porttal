import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimonnowComponent } from './simonnow.component';

describe('SimonnowComponent', () => {
  let component: SimonnowComponent;
  let fixture: ComponentFixture<SimonnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
