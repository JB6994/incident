import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentlistComponent } from './incidentlist.component';

describe('IncidentlistComponent', () => {
  let component: IncidentlistComponent;
  let fixture: ComponentFixture<IncidentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
