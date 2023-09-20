import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Category } from '../shared/models/category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  brands: Brand[] = [];
  categories: Category[] = [];
  brandIdSelected = 0;
  categoryIdSelected = 0;
  sortSelected = 'name';
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ]

  
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getCategories();
  }

  getProducts() {
    this.shopService.getProducts(this.brandIdSelected, this.categoryIdSelected, this.sortSelected).subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error)
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id: 0, name: 'All'}, ...response],
      error: error => console.log(error)
    });
  }

  getCategories() {
    this.shopService.getCategories().subscribe({
      next: response => this.categories = [{id: 0, name: 'All'},  ...response],
      error: error => console.log(error)
    });
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onCategorySelected(categoryId: number) {
    this.categoryIdSelected = categoryId;
    this.getProducts();
  }

  onSortselected(event: any) {
    this.sortSelected= event.target.value;
    this.getProducts();
  }
}
