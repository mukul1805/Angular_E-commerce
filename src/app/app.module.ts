import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxStarRatingModule } from 'ngx-star-rating';
// import { StarRatingModule} from "angular-star-rating";
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './products/search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './products/filter/filter.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailComponent,
    HomePageComponent,
    SearchComponent,
    FilterComponent,
    LoginPageComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    FormsModule,
    // NgxUiLoaderHttpModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    NgbModule,
    // NgxStarRatingModule,
    // StarRatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent, ProductsComponent, ProductDetailComponent]
})
export class AppModule { }
