import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Category } from '../shared/models/category';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) { }


  getProducts(ShopParams: ShopParams) {
    let params = new HttpParams();

    if (ShopParams.brandId) params = params.append('brandId', ShopParams.brandId);
    if (ShopParams.categoryId) params = params.append('categoryId', ShopParams.categoryId);
    // params = params.append('sort', ShopParams.sort);
    // params = params.append('pageIndex', ShopParams.pageNumber);
    // params = params.append('pageSize', ShopParams.pageSize);
    
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params});
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl + 'products/categories');
  }
}
