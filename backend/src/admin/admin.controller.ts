export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    // Example method for getting admin data
    getAdminData() {
        return this.adminService.getAdminData();
    }

    // Example method for performing an admin action
    performAdminAction(actionId: string) {
        return this.adminService.performAction(actionId);
    }
}