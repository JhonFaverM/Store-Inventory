import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpFacturaComponent } from './imp-factura.component';

describe('ImpFacturaComponent', () => {
  let component: ImpFacturaComponent;
  let fixture: ComponentFixture<ImpFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
