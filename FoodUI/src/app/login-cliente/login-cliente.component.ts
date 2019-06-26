import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private loginservice: AuthenticationService,private router: Router) { }
  
  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }

  checkLogin2() {
    if (this.loginservice.authenticateAdmin(this.username, this.password)) {
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }

}
