import { Component } from '@angular/core'; 
import { AuthService } from '../../../../../../src/backend/src/auth/auth.service'; 

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in.component.html',  // Ensure this path is correct 
  }) 
export class SignInComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Handle successful login, e.g., store token, redirect
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid credentials';
      }
    });
  }

}