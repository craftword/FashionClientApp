import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/site/home/home.component';
import { AboutComponent } from './components/site/about/about.component';
import { ProductComponent } from './components/site/product/product.component';
import { ContactComponent } from './components/site/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
// import { registerContentQuery } from '@angular/core/src/render3/instructions';

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent},
  
  { path: 'product', component : ProductComponent},
  
  { path: 'about', component : AboutComponent},

  { path: 'contact', component : ContactComponent},
  { path: '', redirectTo:'/home', pathMatch:'full'  }

  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
