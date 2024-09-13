import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HaircareComponent } from "../haircare/haircare.component";
import { BodycareComponent } from "../bodycare/bodycare.component";
import { SkincareComponent } from "../skincare/skincare.component";
import { IProduct } from '../../iproduct';
import { CommonModule } from '@angular/common';
import { CurrencyConverterPipe } from '../../currency-converter.pipe';
import { ProductService } from '../../product.service';
import { BoxShadowHoverDirective } from '../../box-shadow-hover.directive';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, HaircareComponent, BodycareComponent, SkincareComponent, CommonModule, CurrencyConverterPipe, BoxShadowHoverDirective, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  haircareProducts: IProduct[] = [
    { "id": 1, "name": "Shampoo", "price": 10, "stock": 20, "image": "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 2, "name": "Conditioner", "price": 15, "stock": 15, "image": "https://images.pexels.com/photos/8467960/pexels-photo-8467960.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 3, "name": "Hair Mask", "price": 25, "stock": 10, "image": "https://images.pexels.com/photos/7428102/pexels-photo-7428102.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 4, "name": "Hair Oil", "price": 12, "stock": 30, "image": "https://images.pexels.com/photos/6801173/pexels-photo-6801173.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 5, "name": "Leave-in Conditioner", "price": 18, "stock": 25, "image": "https://images.pexels.com/photos/8467960/pexels-photo-8467960.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 6, "name": "Dry Shampoo", "price": 22, "stock": 18, "image": "https://images.pexels.com/photos/7262414/pexels-photo-7262414.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 7, "name": "Heat Protectant Spray", "price": 16, "stock": 40, "image": "https://images.pexels.com/photos/15233446/pexels-photo-15233446/free-photo-of-bottle-of-anticeptic.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 8, "name": "Hair Serum", "price": 20, "stock": 12, "image": "https://images.pexels.com/photos/20501304/pexels-photo-20501304/free-photo-of-hair-cosmetics-on-bed.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];
  bodycareProducts: IProduct[] = [
    { "id": 4, "name": "Body Wash", "price": 8, "stock": 30, "image": "https://images.pexels.com/photos/19147430/pexels-photo-19147430/free-photo-of-a-bottle-of-soap-sitting-on-top-of-a-book.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 5, "name": "Body Lotion", "price": 12, "stock": 25, "image": "https://images.pexels.com/photos/27363151/pexels-photo-27363151/free-photo-of-woman-hand-holding-vial-of-body-lotion.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 6, "name": "Scrub", "price": 20, "stock": 10, "image": "https://images.pexels.com/photos/7796229/pexels-photo-7796229.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 7, "name": "Body Butter", "price": 18, "stock": 20, "image": "https://images.pexels.com/photos/17596984/pexels-photo-17596984/free-photo-of-body-butter-box-on-tray.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 8, "name": "Hand Cream", "price": 6, "stock": 50, "image": "https://images.pexels.com/photos/286951/pexels-photo-286951.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 9, "name": "Foot Cream", "price": 9, "stock": 15, "image": "https://images.pexels.com/photos/9775217/pexels-photo-9775217.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 10, "name": "Body Oil", "price": 15, "stock": 10, "image": "https://images.pexels.com/photos/7852736/pexels-photo-7852736.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 11, "name": "Deodorant", "price": 7, "stock": 35, "image": "https://images.pexels.com/photos/19147431/pexels-photo-19147431/free-photo-of-box-and-bottle-of-deodorant.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];
  skincareProducts: IProduct[] = [
    { "id": 7, "name": "Face Wash", "price": 18, "stock": 12, "image": "https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 8, "name": "Moisturizer", "price": 25, "stock": 18, "image": "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 9, "name": "Sunscreen", "price": 22, "stock": 10, "image": "https://images.pexels.com/photos/3999057/pexels-photo-3999057.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 10, "name": "Eye Cream", "price": 30, "stock": 8, "image": "https://images.pexels.com/photos/6635922/pexels-photo-6635922.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 11, "name": "Serum", "price": 28, "stock": 20, "image": "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 12, "name": "Toner", "price": 14, "stock": 30, "image": "https://images.pexels.com/photos/27391353/pexels-photo-27391353/free-photo-of-a-bottle-of-red-liquid-sitting-on-a-black-surface.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 13, "name": "Face Mask", "price": 12, "stock": 25, "image": "https://images.pexels.com/photos/7622920/pexels-photo-7622920.jpeg?auto=compress&cs=tinysrgb&w=600" },

    { "id": 14, "name": "Exfoliator", "price": 16, "stock": 10, "image": "https://images.pexels.com/photos/14920150/pexels-photo-14920150.jpeg?auto=compress&cs=tinysrgb&w=600" }
  ];
  selectedProduct: { name: string, quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadHaircareProducts();
    this.loadBodycareProducts();
    this.loadSkincareProducts();
  }

  loadHaircareProducts() {
    this.productService.getHaircareProducts().subscribe(
      (products: IProduct[]) => this.haircareProducts = products,
      (error: any) => console.error('Error fetching haircare products', error)
    );
  }

  loadBodycareProducts() {
    this.productService.getBodycareProducts().subscribe(
      (products: IProduct[]) => this.bodycareProducts = products,
      (error: any) => console.error('Error fetching bodycare products', error)
    );
  }

  loadSkincareProducts() {
    this.productService.getSkincareProducts().subscribe(
      (products: IProduct[]) => this.skincareProducts = products,
      (error: any) => console.error('Error fetching skincare products', error)
    );
  }

  onProductBought(event: { product: IProduct, quantity: number }) {
    const { product, quantity } = event;
    const existingProduct = this.selectedProduct.find(p => p.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.selectedProduct.push({ name: product.name, quantity });
    }

    this.totalPrice += product.price * quantity;
  }

  removeProduct(index: number, quantityToRemove: number) {
    const product = this.selectedProduct[index];

    if (product.quantity > quantityToRemove) {
      product.quantity -= quantityToRemove;
    } else {
      this.selectedProduct.splice(index, 1);
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.selectedProduct.reduce((sum, product) => {
      const productPrice = this.getProductPrice(product.name);
      return sum + productPrice * product.quantity;
    }, 0);
  }

  getProductPrice(productName: string): number {
    const allProducts = [...this.haircareProducts, ...this.bodycareProducts, ...this.skincareProducts];
    const product = allProducts.find(p => p.name === productName);
    return product ? product.price : 0;
  }
}
