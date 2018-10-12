import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PhotosPage } from '../pages/photos/photos';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { PhotoService } from '../pages/photos/photo.service';
import { DetailsPage } from '../pages/details/details';

@NgModule({
  declarations: [
    MyApp,
    PhotosPage,
    TabsPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PhotosPage,
    TabsPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhotoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
