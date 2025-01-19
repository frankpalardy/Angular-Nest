import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { ProductSearchComponent } from './product/product-search/product-search.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';   
import { AuthService } from './auth/auth.service';
import { ProductService } from './product/product.service';

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
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }