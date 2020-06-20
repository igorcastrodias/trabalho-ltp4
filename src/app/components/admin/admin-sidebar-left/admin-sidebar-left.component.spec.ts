import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarLeftComponent } from './admin-sidebar-left.component';

describe('AdminSidebarLeftComponent', () => {
  let component: AdminSidebarLeftComponent;
  let fixture: ComponentFixture<AdminSidebarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidebarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
