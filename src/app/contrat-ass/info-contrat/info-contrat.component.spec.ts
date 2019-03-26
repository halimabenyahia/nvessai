import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContratComponent } from './info-contrat.component';

describe('InfoContratComponent', () => {
  let component: InfoContratComponent;
  let fixture: ComponentFixture<InfoContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
