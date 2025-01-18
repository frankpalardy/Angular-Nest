import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AdminComponent,
    AccountComponent,
    ProductSearchComponent,
    ProductViewComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'sign-in', component: SignInComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'account', component: AccountComponent },
      { path: 'products', component: ProductSearchComponent },
      { path: 'product/:id', component: ProductViewComponent },
      { path: 'purchase', component: PurchaseComponent },
      { path: '', redirectTo: '/sign-in', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }