import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMarqueComponent } from './info-marque.component';

describe('InfoMarqueComponent', () => {
  let component: InfoMarqueComponent;
  let fixture: ComponentFixture<InfoMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
