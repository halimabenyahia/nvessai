import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTypeVComponent } from './info-type-v.component';

describe('InfoTypeVComponent', () => {
  let component: InfoTypeVComponent;
  let fixture: ComponentFixture<InfoTypeVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTypeVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTypeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
