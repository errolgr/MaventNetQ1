import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoService } from './photo.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-about',
  templateUrl: 'photos.html'
})
export class PhotosPage {


  photos = [];
  tab2Root = DetailsPage;
  /**
   * Constructor
   * @param navCtrl
   * @param service
   */
  constructor(public navCtrl: NavController, public service:PhotoService) {
    this.getPhotos();
  }


  /**
   * Function to fetch photos from service
   */
  getPhotos(){
    this.service.readPhotos().subscribe((data:any)=>{
      this.photos = data;
    })
  }

  selectPhoto(event:any){
    this.service.setPhoto(event);
    this.navCtrl.push(this.tab2Root);
  }

}
