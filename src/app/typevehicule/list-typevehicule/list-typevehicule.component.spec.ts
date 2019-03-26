import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypevehiculeComponent } from './list-typevehicule.component';

describe('ListTypevehiculeComponent', () => {
  let component: ListTypevehiculeComponent;
  let fixture: ComponentFixture<ListTypevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
