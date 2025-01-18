import { Controller } from '@nestjs/common';
import { AdminService } from './admin.service.js'; 

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    // Example method for getting admin data
    getAdminData() {
        return this.adminService.getAllAdmins();
    }

    // Example method for performing an admin action
    updateAdmin(actionId: string, data: any) {
        return this.adminService.updateAdmin(actionId, data);
    }
}