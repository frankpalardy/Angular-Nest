import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'products', component: ProductSearchComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'account', component: AccountComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }