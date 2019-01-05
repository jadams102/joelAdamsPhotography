import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioBoudoirComponent } from './portfolio-boudoir/portfolio-boudoir.component';
import { PortfolioMusicComponent } from './portfolio-music/portfolio-music.component';
import { PortfolioPortraitComponent } from './portfolio-portrait/portfolio-portrait.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PortfolioBoudoirComponent,
    PortfolioMusicComponent,
    PortfolioPortraitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
