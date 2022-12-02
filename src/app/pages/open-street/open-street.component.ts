import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-open-street',
  templateUrl: './open-street.component.html',
  styleUrls: ['./open-street.component.css']
})
export class OpenStreetComponent implements OnInit, AfterViewInit {
  private map: any;

  constructor( private mapServ: MapService) { }
  ngAfterViewInit(): void {
    this.setMarkers();
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([-6.140555, 39.336548], 12);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // var marker = L.marker([-6.18344490, 39.22449212]).addTo(this.map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

  }

  setMarkers(){
    this.mapServ.getData().subscribe(response => {
      for(const d of response){
        const lat = d.lat;
        const lon = d.lon;

        let marker = L.marker([lat, lon]).addTo(this.map);
        marker.bindPopup(
          "House number: " + d.number +
          "<br>Zip code: " + d.code)
      }
      // console.log(response);
      
    })
  }

}
