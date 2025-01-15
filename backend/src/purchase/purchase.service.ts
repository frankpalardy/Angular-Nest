export class PurchaseService {
    private purchases: { id: number, [key: string]: any }[] = [];

    createPurchase(purchaseData: any) {
        const newPurchase = { id: this.purchases.length + 1, ...purchaseData };
        this.purchases.push(newPurchase);
        return newPurchase;
    }

    getAllPurchases() {
        return this.purchases;
    }

    getPurchaseById(id: number) {
        return this.purchases.find(purchase => purchase.id === id);
    }

    deletePurchase(id: number) {
        const index = this.purchases.findIndex(purchase => purchase.id === id);
        if (index > -1) {
            this.purchases.splice(index, 1);
            return true;
        }
        return false;
    }
}