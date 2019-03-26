import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVComponent } from './type-v.component';

describe('TypeVComponent', () => {
  let component: TypeVComponent;
  let fixture: ComponentFixture<TypeVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
