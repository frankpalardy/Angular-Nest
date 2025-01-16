export class ProductSearchComponent {
  searchTerm: string = '';
  products: any[] = [];

  constructor(private productService: ProductService) {}

  searchProducts() {
    this.productService.searchProducts(this.searchTerm).subscribe((results) => {
      this.products = results;
    });
  }
}