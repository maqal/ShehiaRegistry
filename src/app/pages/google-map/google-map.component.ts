import { AgmMap } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  // apiLoaded: Observable<boolean>;
  map!: google.maps.Map;
  lat = -6.140555;
  lng = 39.336548;
  markers!: any[];
  mark!: google.maps.Marker;

  latPoint: any;
  lonPoint: any;

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

  // @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadMarkers();
  }

  loadMarkers() {
    this.mapServ.getData().subscribe((response: any[]) => {
      this.markers = response;
    })
  }
}