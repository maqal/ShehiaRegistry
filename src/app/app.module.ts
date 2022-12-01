import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenStreetComponent } from './pages/open-street/open-street.component';
import { HomeComponent } from './pages/home/home.component';
import { GoogleMapComponent } from './pages/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    AppComponent,
    OpenStreetComponent,
    HomeComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AgmCoreModule,
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyDFaXNvUSNlqQoqlNBgCgppWcSeYxb5kDM'
      }
    ),
    GoogleMapsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
