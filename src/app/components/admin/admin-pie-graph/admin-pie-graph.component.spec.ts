import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPieGraphComponent } from './admin-pie-graph.component';

describe('AdminPieGraphComponent', () => {
  let component: AdminPieGraphComponent;
  let fixture: ComponentFixture<AdminPieGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPieGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPieGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
