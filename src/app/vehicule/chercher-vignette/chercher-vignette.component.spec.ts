import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherVignetteComponent } from './chercher-vignette.component';

describe('ChercherVignetteComponent', () => {
  let component: ChercherVignetteComponent;
  let fixture: ComponentFixture<ChercherVignetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChercherVignetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherVignetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
