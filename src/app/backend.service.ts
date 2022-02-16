import { HttpClient } from '@angular/common/http';
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
}
