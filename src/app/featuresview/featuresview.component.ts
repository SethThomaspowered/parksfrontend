
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-featuresview',
  templateUrl: './featuresview.component.html',
  styleUrls: ['./featuresview.component.css']
})
export class FeaturesviewComponent implements OnInit {
  features: any;
  constructor(private backend: BackendService) { }
  getFeatures(){
    this.backend.getFeatures().subscribe(response=>{
      console.log(response);
      return this.features=response;
    })
  }
  ngOnInit(): void {
    this.getFeatures();
  }

}
