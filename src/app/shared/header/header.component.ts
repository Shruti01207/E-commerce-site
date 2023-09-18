import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  menuType:String='default';
  sellerName:any='Shruti';
  ngOnInit(): void {
    this.route.events.subscribe((data:any)=>{
    
      if(data.url){
        console.log(data.url);
        if(localStorage.getItem('seller') && data.url.includes('seller')){
         this.sellerName=JSON.parse(localStorage.getItem('seller')||'seller').body[0].name;
         console.log("seller print",this.sellerName);
          this.menuType='seller-menu';
        }
        else{
          console.log('outside seller area');
          this.menuType='default';
          console.log(this.menuType);
        }                                                    
      }

    })
  }

  private route=inject(Router);
  private seller=inject(SellerService);
  sellerLogOut( ){
    this.seller.sellerLogOut( );
    alert("You have been logout successfully!");
  }



}
