import { ProductService } from './product.service.js';

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    async searchProducts(query: string) {
        return this.productService.search(query);
    }

    async getProductById(id: number) {
        return this.productService.findById(id);
    }
}