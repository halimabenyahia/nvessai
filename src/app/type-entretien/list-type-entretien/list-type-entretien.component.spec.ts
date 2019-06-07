import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeEntretienComponent } from './list-type-entretien.component';

describe('ListTypeEntretienComponent', () => {
  let component: ListTypeEntretienComponent;
  let fixture: ComponentFixture<ListTypeEntretienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeEntretienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
