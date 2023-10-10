import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { productDetails } from 'interfaces';
import { ProductService } from 'src/app/services/product.service';
import { SellerService } from 'src/app/services/seller.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType: String = 'default';
  sellerName: any = 'Shruti';
  sellerCredentials: any;
  searchResults: undefined | productDetails[];
  async ngOnInit() {
    await this.route.events.subscribe((data: any) => {
      console.log("data", data);
      if (data.routerEvent && data.routerEvent.url) {
        if (localStorage.getItem('seller') && data.routerEvent.url.includes('seller')) {

          this.sellerCredentials = JSON.parse(localStorage.getItem('seller') || 'seller');

          if (this.sellerCredentials.body[0] === undefined) {
            this.sellerName = this.sellerCredentials.body.name;
          }
          else {
            this.sellerName = this.sellerCredentials.body[0].name;
          }

          this.menuType = 'seller-menu';
        }
        else {
          // console.log('outside seller area');
          this.menuType = 'default';
        }
      }

    })
  }

  private route = inject(Router);
  private seller = inject(SellerService);
  private product = inject(ProductService);
  sellerLogOut() {
    this.seller.sellerLogOut();
    alert("You have been logout successfully!");
  }

  searchProduct(e: KeyboardEvent) {

    const element = e.target as HTMLInputElement;
    //console.log(element.value);
    this.product.searchProducts(element.value).subscribe((result) => {
      console.log(result);
      this.searchResults = result;
    })
  }

}
