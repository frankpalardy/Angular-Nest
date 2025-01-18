import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { AdminModule } from './admin/admin.module.js';
import { AccountModule } from './account/account.module.js';
import { ProductModule } from './product/product.module.js';
import { PurchaseModule } from './purchase/purchase.module.js';

@Module({
  imports: [
    AuthModule,
    AdminModule,
    AccountModule,
    ProductModule,
    PurchaseModule,
  ],
})
export class AppModule {}