import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-addpark',
  templateUrl: './addpark.component.html',
  styleUrls: ['./addpark.component.css']
})
export class AddparkComponent implements OnInit {
  newName: string ="";
  newAddress: string="";
  newCity: string="Louisville";
  newCounty: string="Jefferson";
  newState: string="Kentucky";
  newZipCode: number= 40203;
  addPark(name: string, address: string, city: string, county: string, state: string, zipCode: number){
    this.backend.addPark(name, address, city, county, state, zipCode)
    this.newName="";
    this.newAddress="";
  }
  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }

}
