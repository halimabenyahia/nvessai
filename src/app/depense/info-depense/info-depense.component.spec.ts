import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDepenseComponent } from './info-depense.component';

describe('InfoDepenseComponent', () => {
  let component: InfoDepenseComponent;
  let fixture: ComponentFixture<InfoDepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
