export class ProductViewComponent {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  purchaseProduct(): void {
    // Logic to handle product purchase
  }
}