import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  credentials = {
    username: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin(): void {
    this.loginService.login(this.credentials).subscribe( (response) => {
          console.log('Login successful:', response);
          alert(`Successfully Logged in! Welcome ${this.credentials.username}`);
          this.router.navigate(['/homepage']);
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  }
}
