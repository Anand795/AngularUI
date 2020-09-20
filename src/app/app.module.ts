import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RestapiService } from './restapi.service'

import {UserModule} from './user/user.module'
import { MaterialModule } from './material/material.module'

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { AdminCheckModule} from './admin-check/admin-check.module'
import { ProductModule } from './product/product.module'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AdminCheckModule,
    ProductModule

  ],
  providers: [ RestapiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
