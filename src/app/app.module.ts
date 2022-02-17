import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalweatherComponent } from './localweather/localweather.component';
import { AddparkComponent } from './addpark/addpark.component';
import { FormsModule } from '@angular/forms';
import { AddfeatureComponent } from './addfeature/addfeature.component';
import { AddparkfeatureComponent } from './addparkfeature/addparkfeature.component';
import { ParksviewComponent } from './parksview/parksview.component';
import { FeaturesviewComponent } from './featuresview/featuresview.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalweatherComponent,
    AddparkComponent,
    AddfeatureComponent,
    AddparkfeatureComponent,
    ParksviewComponent,
    FeaturesviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
