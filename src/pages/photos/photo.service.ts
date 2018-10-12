import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotoService {

  url = 'http://localhost:8080/photos';
  selectedPhoto = {};

  constructor( public http: HttpClient) {
    // do nothing in constructor
  }


  /**
   * Function to fetch photos from backend API.
   */
  readPhotos(){
    return this.http.post(this.url, null);
  }

  /**
   * Stores selected photo locally inside service for later user.
   * @param photo
   */
  setPhoto(photo:any){
    this.selectedPhoto = photo;
  }

  /**
   * Retrieves selected photo.
   */
  getPhoto():any{
    return this.selectedPhoto;
  }

}
