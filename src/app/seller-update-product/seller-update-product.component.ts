import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { productDetails } from 'interfaces';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private product = inject(ProductService);


  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log("id", typeof (productId));
    this.getProduct(productId);

  }

  productData: undefined | productDetails
  getProduct(id: string | null) {

    id && this.product.getProduct(id).subscribe((result) => {
      console.log(result);
      this.productData = result;
    })

  }

  editProduct(updatedProduct: productDetails) {
    if(this.productData){
      updatedProduct.id=this.productData.id;
    }
    this.product.updateProduct(updatedProduct).subscribe((result) => {
      if(result)
      console.log("result",result);
    })
  }

}
