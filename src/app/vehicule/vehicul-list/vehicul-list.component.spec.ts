import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculListComponent } from './vehicul-list.component';

describe('VehiculListComponent', () => {
  let component: VehiculListComponent;
  let fixture: ComponentFixture<VehiculListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
