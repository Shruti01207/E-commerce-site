import { EventEmitter, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { loginCredentials, userCredentials } from 'interfaces';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  authStatus = new EventEmitter<boolean>(true);
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() { }


  userSignUp(data: userCredentials) {
    this.http.post('http://localhost:3000/seller',
      data,
      { observe: 'response' }).subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result));
        this.router.navigate(['seller-home']);

      });
  }


  sellerAlreadySignedIn() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  sellerLogin(data: loginCredentials) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result: any) => {
        console.log(typeof (result));
        if (result && result.body && result.body.length)
        {
          alert('Login successful');
          localStorage.setItem('seller', JSON.stringify(result));
          this.router.navigate(['seller-home']);
        }
        else {
          this.authStatus.emit(false);
          alert('Login failed');
        }
      }

      );
  }

   sellerLogOut(  ){

    localStorage.removeItem('seller');
    this.router.navigate(['seller-auth']);

   }

  

}
