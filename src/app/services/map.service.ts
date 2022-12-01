import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor( private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get("./assets/data.json");
  }
  
}
