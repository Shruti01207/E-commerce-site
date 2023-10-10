import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { productDetails } from 'interfaces';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: productDetails[] = [];
  private product = inject(ProductService);

  ngOnInit(): void {
    this.getProductList();
  }

  deleteProduct(productId: number) {
    //console.log("productId", productId);
    this.product.deleteProduct(productId).subscribe((result) => {
      this.getProductList();
    })

  }

  getProductList() {
      this.product.getProducts().subscribe((result) => {
      this.productList = result;
    });

  }


}


