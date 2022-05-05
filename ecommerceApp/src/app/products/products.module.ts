import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsProductComponent } from './view-all-products-product/view-all-products-product.component';
import { ViewAllCategoryProductComponent } from './view-all-category-product/view-all-category-product.component';
import { ViewByDateComponent } from './view-by-date/view-by-date.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductsProductComponent,
    ViewAllCategoryProductComponent,
    ViewByDateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
