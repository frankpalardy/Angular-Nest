import { Controller, Post, Body, Req } from '@nestjs/common';
import { Request } from 'express'; 
import { SignInDto } from '../dto/signin.dto.js';
import { AuthService } from './auth.service.js';

interface CustomRequest extends Request {
    user: any; // Define the user property or any other properties you need
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
      const { username, password } = body;
      const isValidUser = this.authService.validateUser(username, password);
      if (!isValidUser) {
        throw new Error('Invalid credentials');
      }
      return this.authService.login(username, password);
    }
  
    @Post('logout')
    async logout(@Body() body: { user: any }) {
      return this.authService.logout(body.user);
    }
  }