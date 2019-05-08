import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheTableComponent } from './affiche-table.component';

describe('AfficheTableComponent', () => {
  let component: AfficheTableComponent;
  let fixture: ComponentFixture<AfficheTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
