import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient, private router: Router) { }

  issellerLoggedIn = new BehaviorSubject<boolean>(false);
  userSignUp(data: SignUp) {
    return this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result) => {
      this.issellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
      console.log("This is Result", result);

    });

  }

  reLoadSeller() {
    if (localStorage.getItem('seller')) {
      this.issellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
