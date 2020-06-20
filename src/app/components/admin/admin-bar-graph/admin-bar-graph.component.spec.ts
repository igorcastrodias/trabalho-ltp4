import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBarGraphComponent } from './admin-bar-graph.component';

describe('AdminBarGraphComponent', () => {
  let component: AdminBarGraphComponent;
  let fixture: ComponentFixture<AdminBarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
