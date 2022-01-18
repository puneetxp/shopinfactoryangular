import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './static/header/header.component';
import { FooterComponent } from './static/footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './user/admin/admin.component';
import { OrderComponent } from './user/order/order.component';
import { CartComponent } from './user/cart/cart.component';
import { MaterialModule } from './material/material.module';
import { ShowcaseComponent } from './component/showcase/showcase.component';
import { CheckphoneComponent } from './component/checkphone/checkphone.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './public/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './public/grid/grid.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    OrderComponent,
    CartComponent,
    ShowcaseComponent,
    CheckphoneComponent,
    ProductComponent,
    GridComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
