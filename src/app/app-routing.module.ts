import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './pages/google-map/google-map.component';
import { HomeComponent } from './pages/home/home.component';
import { OpenStreetComponent } from './pages/open-street/open-street.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      {
        path: "", component: OpenStreetComponent
      },
      {
        path: "gmap", component: GoogleMapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
