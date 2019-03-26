import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoiteComponent } from './info-boite.component';

describe('InfoBoiteComponent', () => {
  let component: InfoBoiteComponent;
  let fixture: ComponentFixture<InfoBoiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBoiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
