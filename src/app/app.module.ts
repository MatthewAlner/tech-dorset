import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { HostCardComponent } from './home-page/host-card/host-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    NavbarComponent,
    HostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
