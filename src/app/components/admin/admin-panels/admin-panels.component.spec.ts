import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelsComponent } from './admin-panels.component';

describe('AdminPanelsComponent', () => {
  let component: AdminPanelsComponent;
  let fixture: ComponentFixture<AdminPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
