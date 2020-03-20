import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { HostCardComponent } from './home-page/host-card/host-card.component';
import { ContactUsSectionComponent } from './home-page/contact-us-section/contact-us-section.component';
import { WhatSectionComponent } from './home-page/what-section/what-section.component';
import { WhenWhereSectionComponent } from './home-page/when-where-section/when-where-section.component';
import { QaSectionComponent } from './home-page/qa-section/qa-section.component';
import { HostsSectionComponent } from './home-page/hosts-section/hosts-section.component';
import { HeroImageComponent } from './home-page/hero-image/hero-image.component';
import { ActivityCardComponent } from './home-page/activity-card/activity-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterComponent,
    NavbarComponent,
    HostCardComponent,
    ContactUsSectionComponent,
    WhatSectionComponent,
    WhenWhereSectionComponent,
    QaSectionComponent,
    HostsSectionComponent,
    HeroImageComponent,
    ActivityCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
