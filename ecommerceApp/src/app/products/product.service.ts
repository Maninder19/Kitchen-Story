import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  createProduct(productBody: any):Observable<Products> {
     const baseUrl="http://localhost:3000/product";
     return this.httpClient.post<Products>(baseUrl,productBody);
  }
  viewProduct(productId: any):Observable<Products> {
    const baseUrl="http://localhost:3000/product"+productId;
    return this.httpClient.get<Products>(baseUrl);
 }
 updateProduct(productBody: any,productId: any):Observable<Products> {
  const baseUrl="http://localhost:3000/product"+productId;
  return this.httpClient.put<Products>(baseUrl,productBody);
}
deleteProduct(productId: any):Observable<Products> {
  const baseUrl="http://localhost:3000/product"+productId;
  return this.httpClient.delete<Products>(baseUrl);
}
viewCategoryProduct(CategoryId: any):Observable<Products>{
  const baseUrl="http://localhost:3000/product/category"+CategoryId;
  return this.httpClient.get<Products>(baseUrl);
}
getCategory(){
  const categoryUrl="http://localhost:3000/product/category";
  return this.httpClient.get<Category>(categoryUrl);

}
}
