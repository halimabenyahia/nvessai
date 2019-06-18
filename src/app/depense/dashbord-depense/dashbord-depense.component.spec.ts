import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordDepenseComponent } from './dashbord-depense.component';

describe('DashbordDepenseComponent', () => {
  let component: DashbordDepenseComponent;
  let fixture: ComponentFixture<DashbordDepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordDepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
