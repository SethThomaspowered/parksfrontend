import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-addparkfeature',
  templateUrl: './addparkfeature.component.html',
  styleUrls: ['./addparkfeature.component.css']
})
export class AddparkfeatureComponent implements OnInit {
  parkId: number=1;
  featureId: number=1;
  addParkFeature(parkId: number, featureId: number){
    this.backend.addParkFeature(parkId, featureId);
  }
  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

}
