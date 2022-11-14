import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopPromoComponent } from './top-promo/top-promo.component';
import { MainHeroComponent } from './main-hero/main-hero.component';
import { TopCategoriesComponent } from './top-categories/top-categories.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { EmailSectionComponent } from './email-section/email-section.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    TopPromoComponent,
    MainHeroComponent,
    TopCategoriesComponent,
    BestSellersComponent,
    ProductReviewsComponent,
    BlogSectionComponent,
    EmailSectionComponent,
    FooterComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
