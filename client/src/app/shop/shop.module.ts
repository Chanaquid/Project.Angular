import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
=======
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
>>>>>>> development



@NgModule({
  declarations: [
    ShopComponent,
<<<<<<< HEAD
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ShopComponent
=======
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
>>>>>>> development
  ]
})
export class ShopModule { }
