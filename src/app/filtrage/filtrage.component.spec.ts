import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrageComponent } from './filtrage.component';

describe('FiltrageComponent', () => {
  let component: FiltrageComponent;
  let fixture: ComponentFixture<FiltrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
