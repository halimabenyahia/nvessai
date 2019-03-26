import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTypevehiculeComponent } from './info-typevehicule.component';

describe('InfoTypevehiculeComponent', () => {
  let component: InfoTypevehiculeComponent;
  let fixture: ComponentFixture<InfoTypevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTypevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTypevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
