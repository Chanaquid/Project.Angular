<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
>>>>>>> development
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Category } from '../shared/models/category';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
<<<<<<< HEAD
export class ShopComponent {
  products : Product[] = [];
  brands : Brand[] = [];
  categories : Category[] = [];
  shopParams = new ShopParams();
  sortOptions = [

    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to high', value: 'priceAsc'},
    {name: 'Price: High to low', value: 'priceDesc'},
  ];
  totalCount = 0;
  

  constructor(private shopService: ShopService) {}
  
=======
export class ShopComponent implements OnInit {
  @ViewChild('search') searchTerm?: ElementRef;
  products: Product[] = [];
  brands: Brand[] = [];
  categories: Category[] = [];
  shopParams = new ShopParams();
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to High', value: 'priceAsc'},
    {name: 'Price: High to Low', value: 'priceDesc'}
  ];
  totalCount = 0;
  
  constructor(private shopService: ShopService) { }

>>>>>>> development
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getCategories();
  }

<<<<<<< HEAD

=======
>>>>>>> development
  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: response => {
        this.products = response.data;
<<<<<<< HEAD
        this.shopParams.pageNumber = response.pageIndex;
=======
        this.shopParams.pageNumber = response.index;
>>>>>>> development
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.count;
      },
      error: error => console.log(error)
<<<<<<< HEAD
    })
=======
    });
>>>>>>> development
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id: 0, name: 'All'}, ...response],
      error: error => console.log(error)
<<<<<<< HEAD
    })
=======
    });
>>>>>>> development
  }

  getCategories() {
    this.shopService.getCategories().subscribe({
<<<<<<< HEAD
      next: response => this.categories = [{id: 0, name: 'All'}, ...response],
      error: error => console.log(error)
    })
=======
      next: response => this.categories = [{id: 0, name: 'All'},  ...response],
      error: error => console.log(error)
    });
>>>>>>> development
  }

  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
<<<<<<< HEAD
=======
    this.shopParams.pageNumber = 1;
>>>>>>> development
    this.getProducts();
  }

  onCategorySelected(categoryId: number) {
    this.shopParams.categoryId = categoryId;
<<<<<<< HEAD
    this.getProducts();
  }

  onSortSelected(event: any) {
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event.page)
    {
      this.shopParams.pageNumber = event.page;
      this.getProducts();
    }
  }

} 
=======
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onSortselected(event: any) {
    this.shopParams.sort= event.target.value;
    this.getProducts();
  }

  onPageChanged(event: any) 
  {
    if(this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }
  onSearch() {
    this.shopParams.search = this.searchTerm?.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onReset() {
    if (this.searchTerm) this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }
}
>>>>>>> development
