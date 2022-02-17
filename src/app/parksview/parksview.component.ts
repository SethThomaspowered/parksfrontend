import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-parksview',
  templateUrl: './parksview.component.html',
  styleUrls: ['./parksview.component.css']
})
export class ParksviewComponent implements OnInit {
  parks: any
  constructor(private backend: BackendService) { }
  getParks(){
    this.backend.getParks().subscribe(response=> {
      console.log(response);
      return this.parks=response;
    })
  }
  ngOnInit(): void {
    this.getParks()
  }

}
