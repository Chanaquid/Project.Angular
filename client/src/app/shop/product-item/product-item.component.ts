import { Component, Input } from '@angular/core';
<<<<<<< HEAD
=======
import { BasketService } from 'src/app/basket/basket.service';
>>>>>>> development
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product?: Product;
<<<<<<< HEAD
=======

  constructor(private basketService: BasketService ) {}

  addItemToBasket() {
    this.product && this.basketService.addItemToBasket(this.product);
  }
>>>>>>> development
}
