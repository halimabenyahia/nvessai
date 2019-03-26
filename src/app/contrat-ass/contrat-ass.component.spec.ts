import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratAssComponent } from './contrat-ass.component';

describe('ContratAssComponent', () => {
  let component: ContratAssComponent;
  let fixture: ComponentFixture<ContratAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
