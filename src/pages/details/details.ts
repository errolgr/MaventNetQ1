import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photos/photo.service';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage implements OnInit{


  details = {};

  /**
   * Constructor
   */
  constructor(private service:PhotoService) {

  }

  ngOnInit(): void {
    this.details = this.service.getPhoto();
  }

}
