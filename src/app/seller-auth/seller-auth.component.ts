import { Component, OnInit, inject } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { loginCredentials, userCredentials } from 'interfaces';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  accountExist: boolean = false;
  authStatusMessage: string = '';

  ngOnInit(): void {
    this.seller.sellerAlreadySignedIn();
  }

  private seller = inject(SellerService);

  submitSignUpData(data: userCredentials): void {
    this.seller.userSignUp(data);
  }

  submitLogInData(data: loginCredentials): void {

    this.seller.sellerLogin(data);
    this.seller.authStatus.subscribe((isError) => {
      if (!isError)
        this.authStatusMessage = 'Email or Password is incorrect!'
    })

  }
}
