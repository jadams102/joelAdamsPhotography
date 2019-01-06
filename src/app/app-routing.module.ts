import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioBoudoirComponent } from './portfolio-boudoir/portfolio-boudoir.component';
import { PortfolioPortraitComponent } from './portfolio-portrait/portfolio-portrait.component';
import { PortfolioMusicComponent } from './portfolio-music/portfolio-music.component';
import { LoginComponent } from './login/login.component';
import { PortfolioImageDetailComponent } from './portfolio-image-detail/portfolio-image-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'boudoir',
    component: PortfolioBoudoirComponent
  },
  {
    path: 'portrait',
    component: PortfolioPortraitComponent
  },
  {
    path: 'music',
    component: PortfolioMusicComponent
  },
  {
    path: ':name/:id',
    component: PortfolioImageDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
