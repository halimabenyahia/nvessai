import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarqueComponent } from './form-marque.component';

describe('FormMarqueComponent', () => {
  let component: FormMarqueComponent;
  let fixture: ComponentFixture<FormMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
