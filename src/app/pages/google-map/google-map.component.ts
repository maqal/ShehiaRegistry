import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit{
  // apiLoaded: Observable<boolean>;
  map!: google.maps.Map;
  lat = -6.140555;
  lng = 39.336548;
  markers!: [];

  constructor(http: HttpClient, private mapServ: MapService) {
    // this.apiLoaded = http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDFaXNvUSNlqQoqlNBgCgppWcSeYxb5kDM', 'callback')
    //   .pipe(
    //     map(() => true),
    //     catchError(() => of(false)),
    //   );
  }

  // mapOptions: google.maps.MapOptions = {
  //   center: new google.maps.LatLng(this.lat, this.lng),
  //   zoom: 8,
  // };

  ngOnInit(): void {
    this.loadMarkers();
  }
  
  loadMarkers(){
    this.mapServ.getData().subscribe((response) => {
      this.markers = response;
      // for( var i = 0; i <= this.markers.length; i++){
      //   let l = this.markers.lat;
      //   let ln = this.markers.lon;
      //   const mark = new google.maps.Marker({
      //     position: {this.markers.lat, this.markers.lng}
      //   })
      // }
      console.log(response);
      
    })
  }
}
