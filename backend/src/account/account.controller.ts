import { Controller, Put, Get, Body, Req } from '@nestjs/common'; 
import { Request } from 'express';

import { AccountService } from './account.service';
import { UpdateAccountDto } from '../dto/update-account.dto';  

interface CustomRequest extends Request {
    user: any; // Define the user property or any other properties you need
}

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Put('update')
    updateAccount(@Body() updateAccountDto: UpdateAccountDto): { [key: string]: any; id: string } | null {
        return this.accountService.updateAccount(updateAccountDto);
    }

    getProfile(@Req() req: CustomRequest): { [key: string]: any; id: string } | undefined { 
        return this.accountService.getProfile(req.user.id);
    }
}