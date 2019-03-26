import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeVComponent } from './list-type-v.component';

describe('ListTypeVComponent', () => {
  let component: ListTypeVComponent;
  let fixture: ComponentFixture<ListTypeVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
