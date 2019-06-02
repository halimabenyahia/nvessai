import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherAssuranceComponent } from './chercher-assurance.component';

describe('ChercherAssuranceComponent', () => {
  let component: ChercherAssuranceComponent;
  let fixture: ComponentFixture<ChercherAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChercherAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
