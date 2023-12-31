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
<<<<<<< HEAD
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
=======
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId > 0) params = params.append('brandId',shopParams.brandId);
    if (shopParams.categoryId) params = params.append('categoryId',shopParams.categoryId);
    params = params.append('sort',shopParams.sort);
    params = params.append('pageIndex',shopParams.pageNumber);
    params = params.append('pageSize',shopParams.pageSize);
    if(shopParams.search) params = params.append('search',shopParams.search);


    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products?pageSize=50', {params});
  }
  getProduct(id: number) {
    return this.http.get<Product>(this.baseUrl + 'products/' + id)
>>>>>>> development
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }
<<<<<<< HEAD

=======
>>>>>>> development
  getCategories() {
    return this.http.get<Category[]>(this.baseUrl + 'products/categories');
  }
}
