export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Purchase {
    id: string;
    userId: string;
    productId: string;
    quantity: number;
    totalPrice: number;
    purchaseDate: Date;
}

export interface Admin {
    id: string;
    username: string;
    role: string;
}