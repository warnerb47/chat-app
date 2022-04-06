import { Component, OnInit } from '@angular/core';
import { defaultUser, IUser } from 'src/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  account: IUser= defaultUser;
  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('login');
  }

}
