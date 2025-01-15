import { UpdateAccountDto } from '../dto/update-account.dto';

export class AccountService {
    
    private users: { id: string, [key: string]: any }[] = []; // Define the type of users array

    createUser(userData: { id: string, [key: string]: any }) {
        this.users.push(userData);
        return userData;
    }

    getUserById(userId: string) {
        return this.users.find(user => user.id === userId);
    }

    updateUser(userId: string, updatedData: { [key: string]: any }) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex > -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
            return this.users[userIndex];
        }
        return null;
    }

    deleteUser(userId: string) {
        const userIndex = this.users.findIndex(user => user.id === userId);
        if (userIndex > -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }


    updateAccount(updateAccountDto: UpdateAccountDto): { [key: string]: any; id: string } | null {
        return this.updateUser(updateAccountDto.id, updateAccountDto);
    }

    getProfile(userId: string): { [key: string]: any; id: string } | undefined {
        return this.getUserById(userId);
    }
}