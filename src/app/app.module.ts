import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ImageService } from './services/image.service';
import { AuthenticationService } from './services/authentication.service';
import { GalleryService } from './services/gallery.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UploadService } from './services/upload.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { config }  from './api-keys';
import { UploadComponent } from './pages/gallery/upload/upload.component';
import { LoginComponent } from './pages/login/login.component';
import { GalleryImageDetailComponent } from './pages/gallery/gallery-image-detail/gallery-image-detail.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AddGalleryComponent } from './pages/gallery/add-gallery/add-gallery.component';
import { EditGalleryComponent } from './pages/gallery/edit-gallery/edit-gallery.component';
import { RemoveGalleryComponent } from './pages/gallery/remove-gallery/remove-gallery.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryImageEditComponent } from './pages/gallery/gallery-image-edit/gallery-image-edit.component';

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
    GalleryImageDetailComponent,
    GalleryComponent,
    AddGalleryComponent,
    EditGalleryComponent,
    RemoveGalleryComponent,
    FooterComponent,
    GalleryImageEditComponent,
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
