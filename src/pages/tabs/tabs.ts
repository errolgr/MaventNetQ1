import { Component } from '@angular/core';
import { PhotosPage } from '../photos/photos';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PhotosPage;

  constructor() {

  }
}
