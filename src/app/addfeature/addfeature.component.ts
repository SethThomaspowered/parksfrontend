import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-addfeature',
  templateUrl: './addfeature.component.html',
  styleUrls: ['./addfeature.component.css']
})
export class AddfeatureComponent implements OnInit {
  newFeature: string="";
  addFeature(feature: string){
    this.backend.addFeature(feature);
  }
  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

}
