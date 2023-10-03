import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { productDetails } from 'interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:undefined|productDetails[ ];

  ngOnInit(): void {
   this.product.getPopularProducts( ).subscribe((result)=>{
    console.log(result,"result");
    this.productList=result;
   })
  }

  private product = inject(ProductService);
 






}
