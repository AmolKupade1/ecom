import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService, private router: Router) { }

  showLogIn = false;
  ngOnInit(): void {
    this.seller.reLoadSeller();
  }

  signUp(data: SignUp) {
    console.log(data);
    this.seller.userSignUp(data)
  }

  LogIn(data: SignUp) {
    console.log(data);

  }

  openLogIn() {
    this.showLogIn = true;
  }

  openSignUp() {
    this.showLogIn = false;
  }

}
