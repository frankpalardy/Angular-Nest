import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-component',
  template: `
    <div>
      <h2>Sign In Component</h2>
      <!-- your template here -->
    </div>
  `
})
export class SignInComponent {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  signIn() {
    // Logic for signing in the user
  }
}