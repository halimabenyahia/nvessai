import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTypeDepenseComponent } from './info-type-depense.component';

describe('InfoTypeDepenseComponent', () => {
  let component: InfoTypeDepenseComponent;
  let fixture: ComponentFixture<InfoTypeDepenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTypeDepenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTypeDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
