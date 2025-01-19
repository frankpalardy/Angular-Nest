import { Module } from '@nestjs/common';
import { ProductService } from './product.service.js';

@Module({
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule {}