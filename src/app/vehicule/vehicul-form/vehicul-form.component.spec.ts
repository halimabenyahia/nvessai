import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculFormComponent } from './vehicul-form.component';

describe('VehiculFormComponent', () => {
  let component: VehiculFormComponent;
  let fixture: ComponentFixture<VehiculFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
