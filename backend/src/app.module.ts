import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { PurchaseModule } from './purchase/purchase.module';

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