import { Injectable } from '@nestjs/common';
import { Product } from './product.model.js'; // Adjust the path as necessary
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductService {
    private products: any[] = []; // This should be replaced with actual data source

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find(product => product.id === id);
    }

    create(product: any) {
        this.products.push(product);
        return product;
    }

    update(id: number, updatedProduct: any) {
        const index = this.products.findIndex(product => product.id === id);
        if (index > -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            return this.products[index];
        }
        return null;
    }

    delete(id: number) {
        const index = this.products.findIndex(product => product.id === id);
        if (index > -1) {
            return this.products.splice(index, 1);
        }
        return null;
    }
    async findById(id: number): Promise<Product> {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
    
    search(query: string): Observable<any[]>{
// Implement the search logic here

        return of([]); // Return an empty array or the search results

    }
}