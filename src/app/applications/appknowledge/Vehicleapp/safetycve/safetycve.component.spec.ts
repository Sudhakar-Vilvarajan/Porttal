import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetycveComponent } from './safetycve.component';

describe('SafetycveComponent', () => {
  let component: SafetycveComponent;
  let fixture: ComponentFixture<SafetycveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetycveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetycveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
