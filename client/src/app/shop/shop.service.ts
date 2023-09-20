import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Category } from '../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, categoryId?: number, sort?: string) {
    let params = new HttpParams();

    if (brandId) params = params.append('brandId',brandId);
    if (categoryId) params = params.append('categoryId',categoryId);
    if (sort) params = params.append('sort',sort);

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products?pageSize=50', {params});
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }
  getCategories() {
    return this.http.get<Category[]>(this.baseUrl + 'products/categories');
  }
}
