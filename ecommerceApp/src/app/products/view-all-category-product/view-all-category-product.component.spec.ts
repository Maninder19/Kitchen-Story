import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCategoryProductComponent } from './view-all-category-product.component';

describe('ViewAllCategoryProductComponent', () => {
  let component: ViewAllCategoryProductComponent;
  let fixture: ComponentFixture<ViewAllCategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllCategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
