import { ProductService } from '@backend/product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-search',
  template: `
    <div>
      <h2>Product Search</h2>
      <!-- your template here -->
    </div>
  `
})
export class ProductSearchComponent {
  searchTerm: string = '';
  products: any[] = [];

  constructor(private productService: ProductService) {}

  searchProducts() {
    this.productService.search(this.searchTerm).subscribe((results: any[]) => {
      this.products = results;
    });
  }
}