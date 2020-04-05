import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBrandsComponent } from './browse-brands.component';

describe('BrowseBrandsComponent', () => {
  let component: BrowseBrandsComponent;
  let fixture: ComponentFixture<BrowseBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
