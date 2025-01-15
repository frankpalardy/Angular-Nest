import { ProductService } from './product.service';

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    async searchProducts(query: string) {
        return this.productService.search(query);
    }

    async getProductById(id: string) {
        return this.productService.findById(id);
    }
}