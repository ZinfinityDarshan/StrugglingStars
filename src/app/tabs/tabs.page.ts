import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Router } from '@angular/router';
import { File } from "@ionic-native/file/ngx";
import { Base64 } from '@ionic-native/base64/ngx';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { async } from 'q';



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

  img:any = [];
  options: ImagePickerOptions;
  path: any;
  //file: any;
  constructor( public route: Router,private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,private imagePicker: ImagePicker, 
    public file: File, public base64: Base64, private dbservice: FirebaseService, private afstorage: AngularFireStorage) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  async getImages() {
            this.options = {
              width: 400,
              quality: 90,
              height: 400,
              // output type, defaults to FILE_URIs.
              // available options are 
              // window.imagePicker.OutputType.FILE_URI (0) or 
              // window.imagePicker.OutputType.BASE64_STRING (1)
              outputType: 1  
            };
            await this.imagePicker.getPictures(this.options).then((results) => {
              let imageURLs=[];
              for (var i = 0; i < results.length; i++) {

                let name = new Date().getTime();
                let user = localStorage.getItem('userId')
                let newname  = `img_${user +'_'+new Date().getTime()}.jpg`
                let fileref = this.afstorage.ref('post/'+newname);
                let upload = fileref.putString("data:image/jpeg;base64,"+results[i], 'data_url');

                upload.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
                  uploadSnapshot.ref.getDownloadURL().then(url =>{
                    this.path = url;
                    imageURLs.push(url);
                    console.log('downloading url is'+url);
                    localStorage.setItem("img",JSON.stringify(imageURLs));
                  })
                  console.log("awaiting ..... ");
                }).catch(err =>{
                  console.log(err);
                })
                
              }
              
            }, (err) => {
                  alert(err);
          });
          this.bottomSheetRef.dismiss();
          this.route.navigate(['tabs/addpost']); 

    }

  }
