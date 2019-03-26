import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChauffeurComponent } from './form-chauffeur.component';

describe('FormChauffeurComponent', () => {
  let component: FormChauffeurComponent;
  let fixture: ComponentFixture<FormChauffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChauffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
