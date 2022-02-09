import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-localweather',
  templateUrl: './localweather.component.html',
  styleUrls: ['./localweather.component.css']
})
export class LocalweatherComponent implements OnInit {
  zip: string="40207";
  weather: any;
  findWeather(zip: string): void {
    this.http
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us${environment.weatherKey}&&units=imperial`
      )
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
      });
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.findWeather(this.zip);
  }

}
