import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller.js';
import { PurchaseService } from './purchase.service.js';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}