import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepenseCarburantComponent } from './list-depense-carburant.component';

describe('ListDepenseCarburantComponent', () => {
  let component: ListDepenseCarburantComponent;
  let fixture: ComponentFixture<ListDepenseCarburantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDepenseCarburantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepenseCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
