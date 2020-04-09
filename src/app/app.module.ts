import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ImageService } from './services/image.service';
import { AuthenticationService } from './services/authentication.service';
import { GalleryService } from './services/gallery.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UploadService } from './services/upload.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { config }  from './api-keys';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { PortfolioImageDetailComponent } from './portfolio-image-detail/portfolio-image-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AddGalleryComponent } from './add-gallery/add-gallery.component';
import { EditGalleryComponent } from './edit-gallery/edit-gallery.component';
import { RemoveGalleryComponent } from './remove-gallery/remove-gallery.component';
import { FooterComponent } from './footer/footer.component';

export const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    UploadComponent,
    LoginComponent,
    PortfolioImageDetailComponent,
    GalleryComponent,
    AddGalleryComponent,
    EditGalleryComponent,
    RemoveGalleryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ ImageService, AuthenticationService, AngularFireAuth, UploadService, GalleryService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
