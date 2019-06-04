import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { User } from 'src/app/entity/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ImagePickerOptions, ImagePicker } from '@ionic-native/image-picker/ngx';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	regiFrom : FormGroup;
	addSubForm: FormGroup;
	username:any;
	password:any;
	emial:any;
	mobno:any;
	data:any;
	isLinear = false;
	registerbool =true;
	spinbool=false;
	subjects = ["art","dance","writing", "personal", "theater", "design"];
	sub= [];
	userId: string;
	profilepicbool: boolean = false;
	httpOptionsglobal = {
		headers: new HttpHeaders({
		  'Content-Type':  'application/json',
		  'Authorization': 'Bearer '+localStorage.getItem('token'),
		  'Access-Control-Allow-Origin':'*' 
		})
	  };
	  img:any = [];
	  options: ImagePickerOptions;
	  path: any;
	  image: string;

	constructor(private authService: AuthService,
		private navCtrl: NavController,private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private imagePicker: ImagePicker
		,private afstorage: AngularFireStorage, public alertController: AlertController ) {
		this.regiFrom = this.formBuilder.group({
			username:['', Validators.required],
			password:['', Validators.required],
			email:['',Validators.required],
			mobno:['',Validators.required]
		});
		this.addSubForm = this.formBuilder.group({
			subject:['',Validators.required]
		});

	}

	ngOnInit() {
	}

	async presentAlert() {
		const alert = await this.alertController.create({
		  header: 'Alert',
		//   subHeader: 'Subtitle',
		  message: 'Username or Email already in use.',
		  buttons: ['OK']
		});
	
		await alert.present();
	  }
	  async errorAlert() {
		const alert = await this.alertController.create({
		  header: 'Alert',
		//   subHeader: 'Subtitle',
		  message: 'Error please connect Admin.',
		  buttons: ['OK']
		});
	
		await alert.present();
	  }
	  async picnotuploadedAlert() {
		const alert = await this.alertController.create({
		  header: 'Alert',
		//   subHeader: 'Subtitle',
		  message: 'Courrupted image please select other image.',
		  buttons: ['OK']
		});
	
		await alert.present();
	  }
	register(form: any) {
		console.log('****************'+form.username);
		this.spinbool=true;
		this.authService.register(form.username,form.mobno,form.email,form.password).subscribe(
			(data: User) => {	
				console.log(data)
				this.userId = data.username;
				localStorage.setItem('token', data.token);
				localStorage.setItem('userId', data.username);	
				// this.navCtrl.navigateRoot('/register');
				if(data.token =="INTEErr002" || data.token =="INTErr001"){
					this.presentAlert();
					this.regiFrom.reset();
					this.registerbool =true;
					this.spinbool = false;
				}else{
					this.registerbool =false;
					this.spinbool = false;
				}
			},
			error => {
				console.log(error);
				this.regiFrom.reset();
				this.errorAlert();
				this.registerbool =true;
				this.spinbool = false;
			},
			() => {

			}
			);
	}
	updateSubjects(sub: string){
		
		console.log("vallue" +sub);
		if(this.sub.includes(sub)){
			this.sub.splice(this.sub.indexOf(sub), 1);
			console.log(this.sub);
		}else{
			this.sub.push(sub);
			console.log(this.sub)
		}
	}

	addSubjectsToProfile(){
		this.spinbool=true;
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json',
			  'Authorization': 'Bearer '+localStorage.getItem('token'),
			  'Access-Control-Allow-Origin':'*' 
			})
		  };
		let body = {
			"userId" : localStorage.getItem('userId'),
			"subjects": this.sub
		}
		console.log('body is '+JSON.stringify(body));
		this.http.post('https://acc009specback.herokuapp.com/secure/profile/addSubjectsToProfile',body, httpOptions)
		.subscribe((data) =>{
			console.log(data);
			this.spinbool = false;
			this.router.navigate(['tabs/home']);
		}),
		error =>{
			console.log(error)
		};
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
		const httpOptions = {
				headers: new HttpHeaders({
				  'Content-Type':  'application/json',
				  'Authorization': 'Bearer '+localStorage.getItem('token'),
				  'Access-Control-Allow-Origin':'*' 
				})
			  };
		  let imageURLs=[];
		  for (var i = 0; i < results.length; i++) {

			let name = new Date().getTime();
			let user = localStorage.getItem('userId')
			let newname  = `img_${user +'_'+new Date().getTime()}.jpg`
			let fileref = this.afstorage.ref('profile/'+newname);
			let upload = fileref.putString("data:image/jpeg;base64,"+results[i], 'data_url');

			upload.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot)=>{
			  this.spinbool = false;
			  uploadSnapshot.ref.getDownloadURL().then(url =>{
				//this.path = url;
				this.image = url;
				console.log('downloading url is'+url);
				let body = {
					"userId": localStorage.getItem('userId'),
					"picurl": url
				}
				this.http.post('https://acc009specback.herokuapp.com/secure/profile/addProfilePic',
				body, httpOptions).subscribe((data: User) =>{
					if(data.status=true){
					console.log('profile pic is added successfully '+data);
					
					this.spinbool = false;
					}else{
						
						this.picnotuploadedAlert();
						this.spinbool = false;
		
					}
				},
				error =>{
					console.log(error);
					this.picnotuploadedAlert();
					this.spinbool = false;

				});
			  })
			  //console.log("awaiting ..... ");
			}).catch(err =>{
			  console.log(err);
			})
			
		  }
		  
		}, (err) => {
			  alert(err);
	  });
	//   this.bottomSheetRef.dismiss();
	//   this.route.navigate(['tabs/addpost']); 

	}
	addProfilePic(userId: string){

	}

}
