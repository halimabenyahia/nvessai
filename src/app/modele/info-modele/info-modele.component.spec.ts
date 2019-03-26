import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModeleComponent } from './info-modele.component';

describe('InfoModeleComponent', () => {
  let component: InfoModeleComponent;
  let fixture: ComponentFixture<InfoModeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoModeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
