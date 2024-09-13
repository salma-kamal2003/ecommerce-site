import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../iproduct';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BoxShadowHoverDirective } from '../../box-shadow-hover.directive';

@Component({
  selector: 'app-bodycare',
  standalone: true,
  imports: [CommonModule, FormsModule, BoxShadowHoverDirective],
  templateUrl: './bodycare.component.html',
  styleUrl: './bodycare.component.css'
})
export class BodycareComponent {

  @Input() products: IProduct[] = [];
  @Output() buyProduct = new EventEmitter<{ product: IProduct, quantity: number }>();
  totalPrice: number = 0;

  quantityToBuy: { [key: number]: number } = {};

  handleBuyProduct(product: IProduct) {
    let quantity = product.quantityToBuy || 0
    let qunt = Math.floor(quantity)


    if (isNaN(qunt) || qunt < 1) {
      console.error("please enter a valid quantity");
    }
    else if (product.stock == 0) {
      console.error(`Sorry, ${product.name} is out of stock.`);
    }
    else if (qunt > product.stock) {
      console.error(`You are trying to buy ${quantity} items, but only ${product.stock} items are available in stock`);
    }
    else {
      this.totalPrice += product.price * qunt
      this.DecreaseStock(product, qunt);
      this.buyProduct.emit({ product, quantity: qunt })
    }
  }

  DecreaseStock(product: IProduct, count: number) {
    if (product.stock >= count) {
      product.stock -= count;
    } else {
      console.error(`Not enough stock to decrease by ${count}`);
    }
  }
}
