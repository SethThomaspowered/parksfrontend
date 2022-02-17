import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  uri = environment.uri;
  constructor(private http: HttpClient) { }
  getParks(){
    return this.http.get(`${this.uri}/api/parks`)
  }
  addPark(name: string, address: string, city: string, county: string, state: string, zipCode: number){
    const park = {
      "name": name,
      "address": address,
      "city": city,
      "county": county,
      "state": state,
      "zipCode": zipCode
    };
    console.log(park);
    this.http.post(`${this.uri}/api/parks`, park).subscribe(response=> console.log(response));
    alert("Park has been added.")
  }
  addFeature(feature: string){
    const highlight = {
      "feature": feature
    };
    console.log(highlight);
    this.http.post(`${this.uri}/api/features`, highlight).subscribe(response=> console.log(response));
    alert("Feature has been added.")
  }
  addParkFeature(parkId: number, featureId: number){
    const parkFeature = {
      "parkId": parkId,
      "featureId": featureId
    };
    console.log(parkFeature);
    this.http.put(`${this.uri}/api/parks/${parkId}/features/${featureId}`, parkFeature).subscribe(response=> console.log(response));
  }
  getFeatures(){
    return this.http.get(`${this.uri}/api/features`)
  }
}
