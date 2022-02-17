import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddparkComponent } from './addpark/addpark.component';
import { FeaturesviewComponent } from './featuresview/featuresview.component';
import { LocalweatherComponent } from './localweather/localweather.component';
import { ParksviewComponent } from './parksview/parksview.component';

const routes: Routes = [
  {path: '', component: LocalweatherComponent},
  {path: 'addpark', component: AddparkComponent},
  {path: 'parks', component: ParksviewComponent},
  {path: 'features', component: FeaturesviewComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
