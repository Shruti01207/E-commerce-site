import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  async ngOnInit() {
    await this.route.events.subscribe((data: any) => {
      console.log("data.url.", data.routerEvent.url);
      console.log("data", data);
      if (data.routerEvent.url) {
        if (localStorage.getItem('seller') && data.routerEvent.url.includes('seller')) {
          this.sellerCredentials = JSON.parse(localStorage.getItem('seller') || 'seller')
          // this.sellerName=JSON.parse(localStorage.getItem('seller')||'seller').body[0].name?.body[0].name;
          if (this.sellerCredentials.body[0] === undefined) {
            this.sellerName = this.sellerCredentials.body.name;
          }
          else {
            this.sellerName = this.sellerCredentials.body[0].name;
          }
          this.menuType = 'seller-menu';
        }
        else {
          console.log('outside seller area');
          this.menuType = 'default';
          console.log(this.menuType);
        }
      }

    })
  }

  private route = inject(Router);
  private seller = inject(SellerService);
  sellerLogOut() {
    this.seller.sellerLogOut();
    alert("You have been logout successfully!");
  }



}
