import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsProductComponent } from './view-all-products-product.component';

describe('ViewAllProductsProductComponent', () => {
  let component: ViewAllProductsProductComponent;
  let fixture: ComponentFixture<ViewAllProductsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProductsProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProductsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
