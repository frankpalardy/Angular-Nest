import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-view',
  template: `
    <div>
      <h2>Product View</h2>
      <!-- your template here -->
    </div>
  `
})
export class ProductViewComponent {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.findById(productId).then((data) => {
        this.product = data;
      });
    }
  }

  purchaseProduct(): void {
    // Logic to handle product purchase
  }
}