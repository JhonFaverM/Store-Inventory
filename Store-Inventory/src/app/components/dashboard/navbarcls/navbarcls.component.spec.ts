import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarclsComponent } from './navbarcls.component';

describe('NavbarclsComponent', () => {
  let component: NavbarclsComponent;
  let fixture: ComponentFixture<NavbarclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarclsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
