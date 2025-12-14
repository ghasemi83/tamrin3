import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router = inject(Router);
  loginForm: loginForm = {
    username: '',
    password: '',
    keepMe: false
  };
  message: string = '';
  check() {
    console.log(this.loginForm);
    if (this.loginForm.username == 'mahshid' && this.loginForm.password=='1234') {
      sessionStorage.setItem('token', 'fgh%$$cfgfghh123456789fdghdfh');
      if (this.loginForm.keepMe == true) {
        localStorage.setItem('token', 'fgh%$$cfgfghh123456789fdghdfh');
      }
      this.router.navigateByUrl('/private');
    }
    else {
      this.message = 'نام کاربری یا کلمه ی عبور صحیح نمیباشد ';
    }
  }
}

export interface loginForm {
  username: string;
  password: string;
  keepMe: boolean;
}