import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { TabsPageRoutingModule } from "../app/tabs/tabs.router.module";
import { TabsPageModule } from './tabs/tabs.module';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { GooglePlus } from "@ionic-native/google-plus/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    BrowserAnimationsModule, MaterialModule, TabsPageRoutingModule, TabsPageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    PhotoLibrary,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
