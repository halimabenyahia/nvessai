import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnergieComponent } from './list-energie.component';

describe('ListEnergieComponent', () => {
  let component: ListEnergieComponent;
  let fixture: ComponentFixture<ListEnergieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnergieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
