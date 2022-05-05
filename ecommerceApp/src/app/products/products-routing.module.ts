import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllCategoryProductComponent } from './view-all-category-product/view-all-category-product.component';
import { ViewAllProductsProductComponent } from './view-all-products-product/view-all-products-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsProductComponent },
  { path: 'add-product', component: AddProductComponent },
{path:'view-product',component:ViewProductComponent},
{ path: 'search', component: ViewAllCategoryProductComponent },
{path:'update-product/:id',component:UpdateProductComponent},
{path:'view-product/:id',component:ViewProductComponent},
{path:'view-product/:id',component:ViewProductComponent},
{path:'delete-product',component:DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
