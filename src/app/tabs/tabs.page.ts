import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
//import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private bottomSheet: MatBottomSheet,) {}

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

  img: any;
  options: any;

  constructor( public route: Router,private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,private imagePicker: ImagePicker ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  getImages() {
    // this.photoLibrary.requestAuthorization().then(() => {
      //   this.photoLibrary.getLibrary().subscribe({
        //     next: library => {
          //       library.forEach(function(libraryItem) {
            //         console.log(libraryItem.id);          // ID of the photo
            //         console.log(libraryItem.photoURL);    // Cross-platform access to photo
            //         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            //         console.log(libraryItem.fileName);
            //         console.log(libraryItem.width);
            //         console.log(libraryItem.height);
            //         console.log(libraryItem.creationDate);
            //         console.log(libraryItem.latitude);
            //         console.log(libraryItem.longitude);
            //         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
            //       });
            //     },
            //     error: err => { console.log('could not get photos'); },
            //     complete: () => { console.log('done getting photos'); }
            //   });
            // })
            // .catch(err => console.log('permissions weren\'t granted'));
            this.options = {
              // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
              // selection of a single image, the plugin will return it.
              //maximumImagesCount: 3,

              // max width and height to allow the images to be.  Will keep aspect
              // ratio no matter what.  So if both are 800, the returned image
              // will be at most 800 pixels wide and 800 pixels tall.  If the width is
              // 800 and height 0 the image will be 800 pixels wide if the source
              // is at least that wide.
              width: 200,
              //height: 200,

              // quality of resized image, defaults to 100
              quality: 25,

              // output type, defaults to FILE_URIs.
              // available options are 
              // window.imagePicker.OutputType.FILE_URI (0) or 
              // window.imagePicker.OutputType.BASE64_STRING (1)
              outputType: 1
            };
            this.img = [];
            this.imagePicker.getPictures(this.options).then((results) => {
              for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                this.img.push(results[i]);
                this.route.navigate(['/addpost', {img: results[i]}]);
              }
            }, (err) => { });
          }

        }
