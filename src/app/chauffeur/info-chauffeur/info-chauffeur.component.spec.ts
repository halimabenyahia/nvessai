import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChauffeurComponent } from './info-chauffeur.component';

describe('InfoChauffeurComponent', () => {
  let component: InfoChauffeurComponent;
  let fixture: ComponentFixture<InfoChauffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoChauffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
