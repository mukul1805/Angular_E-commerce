import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private usersService: UsersService) { }

  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit(): void {
    this.usersService.register(this.user).subscribe((response) => {
          console.log('Registration successful:', response);
          alert("Registration successful")
        },
        (error) => {console.error('Registration failed:', error); alert("Registration Failed")}
      );
      }
}
