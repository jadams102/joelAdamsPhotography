import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'firebase/storage';
import 'firebase/database';
import { Gallery } from '../models/gallery.model';

@Injectable()
export class GalleryService {
  private uid: string;
  galleries: FirebaseListObservable<Gallery[]>;

  constructor(private afAuth: AngularFireAuth, private database: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
    this.galleries = this.database.list('galleryinfo');
  }

  getGalleries() {
    return this.galleries;
  }

  addGallery(newGallery: Gallery) {
      this.galleries.push(newGallery);
  }

  updateGallery(localUpdatedGallery) {
      let galleryEntry = this.getGalleryById(localUpdatedGallery.$key);
      galleryEntry.update({
        shortDesc: localUpdatedGallery.shortDesc,
        longDesc: localUpdatedGallery.longDesc
      })
  }

  deleteGallery(key: string) {
    const galleryToDelete = this.database.list('galleryinfo/' + key + '/');
    galleryToDelete.remove();
  }

  getGalleryById(key: string) {
    return this.database.object('galleryinfo/' + key);
  }
}
