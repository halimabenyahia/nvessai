import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEnergieComponent } from './info-energie.component';

describe('InfoEnergieComponent', () => {
  let component: InfoEnergieComponent;
  let fixture: ComponentFixture<InfoEnergieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEnergieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
