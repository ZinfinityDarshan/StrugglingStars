import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url: any;
  constructor(private afstorage: AngularFireStorage) { }

  uploadToStorage(img: any) : AngularFireUploadTask{
    let name = new Date().getTime();
    let user = localStorage.getItem('userId')
    let newname  = `img_${user +'_'+new Date().getTime()}.jpg`
    return this.afstorage.ref('profile/'+newname).putString(img, 'data_url');
  }

  getProfilePic(path: any){
    this.afstorage.ref(path).getDownloadURL().subscribe(url1 => {
      this.url = url1;
      console.log(this.url)
      return this.url});
  }

}
