import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnergieComponent } from './form-energie.component';

describe('FormEnergieComponent', () => {
  let component: FormEnergieComponent;
  let fixture: ComponentFixture<FormEnergieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnergieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
