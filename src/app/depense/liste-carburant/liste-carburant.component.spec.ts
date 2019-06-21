import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCarburantComponent } from './liste-carburant.component';

describe('ListeCarburantComponent', () => {
  let component: ListeCarburantComponent;
  let fixture: ComponentFixture<ListeCarburantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCarburantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
