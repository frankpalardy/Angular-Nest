import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
      .then(response => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.accessToken);  // Store the token
        this.router.navigate(['/products']);  // Redirect to products page
      })
      .catch(error => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid credentials';
      });
  }
}