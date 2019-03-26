import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculInfoComponent } from './vehicul-info.component';

describe('VehiculInfoComponent', () => {
  let component: VehiculInfoComponent;
  let fixture: ComponentFixture<VehiculInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
