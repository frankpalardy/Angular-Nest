import { Controller, Post, Body, Req } from '@nestjs/common';
import { Request } from 'express'; 
import { SignInDto } from '../dto/signin.dto';
import { AuthService } from './auth.service';

interface CustomRequest extends Request {
    user: any; // Define the user property or any other properties you need
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    async signIn(@Body() signInDto: SignInDto) {
    }
    
    @Post('signout')
    async signOut(@Req() req: CustomRequest) {
        return this.authService.logout(req.user);
    }
}