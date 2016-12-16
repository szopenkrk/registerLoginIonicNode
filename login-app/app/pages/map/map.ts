import { Component } from '@angular/core';

import {Platform, NavController } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/map/map.html',
})
export class MapPage {

  constructor(private navCtrl: NavController, private platform: Platform) {
    this.platform = platform;
    // this.initializeMap();
  }


  // initializeMap() {
  //   this.platform.ready().then(() => {
  //     var minZoomLevel = 12;
  //
  //     this.map = new google.maps.Map(document.getElementById('map_canvas'), {
  //       zoom: minZoomLevel,
  //       center: new google.maps.LatLng(38.50, -90.50),
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     });
  //   });
  // }
}
