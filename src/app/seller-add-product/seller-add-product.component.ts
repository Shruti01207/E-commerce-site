import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { productDetails } from 'interfaces';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  addProductStatus: string = '';
  private product = inject(ProductService);

  addProduct(product: productDetails) {
    this.product.addProduct(product).subscribe((result) => {
      if (result != undefined) {
        this.addProductStatus = "Product has been added successfully!";
        setTimeout(() => this.addProductStatus = '', 5000);
      }
      else {
        this.addProductStatus = "There is some error while adding the product";
        setTimeout(() => this.addProductStatus = '', 5000);
      }
    });
  }



}
