import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  loginForm:loginForm={
    username:'',
    password:'',
    keepMe:false
  };
  message:string='';
  check(){
    if(this.loginForm.username=='admin' && this.loginForm.password=='admin'){
      //
    }
    else{
      this.message='نام کاربری یا کلمه ی عبور صحیح نمیباشد ';
    }
  }
}

export interface loginForm{
  username:string;
  password:string;
  keepMe:boolean;
}