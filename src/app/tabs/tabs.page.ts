import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    console.log('reaching here');
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['tabs.page.scss']
})
export class BottomSheetOverviewExampleSheet {

  imageResponse: any;
  options: any;

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, private photoLibrary: PhotoLibrary) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  getImages() {
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function(libraryItem) {
            console.log(libraryItem.id);          // ID of the photo
            console.log(libraryItem.photoURL);    // Cross-platform access to photo
            console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            console.log(libraryItem.fileName);
            console.log(libraryItem.width);
            console.log(libraryItem.height);
            console.log(libraryItem.creationDate);
            console.log(libraryItem.latitude);
            console.log(libraryItem.longitude);
            console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
    .catch(err => console.log('permissions weren\'t granted'));
  }

}
