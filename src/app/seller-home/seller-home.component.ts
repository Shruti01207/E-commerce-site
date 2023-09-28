import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { productDetails } from 'interfaces';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  
  productList:productDetails[ ]=[ ];
  private product = inject(ProductService);

  ngOnInit(): void {
   this.product.getProducts( ).subscribe((result)=>{
    console.log("products",result);
    this.productList=result;
   });
  }

  deleteProduct(productId:number )
  {
   console.log("productId",productId);
  }
  

}
