import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { ShopModule } from './shop/shop.module';
=======
import { HomeModule } from './home/home.module';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
>>>>>>> development

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

=======
>>>>>>> development
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
<<<<<<< HEAD
    ShopModule
=======
    HomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor,multi:true}
>>>>>>> development
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
