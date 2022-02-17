import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddparkComponent } from './addpark/addpark.component';
import { LocalweatherComponent } from './localweather/localweather.component';

const routes: Routes = [
  {path: '', component: LocalweatherComponent},
  {path: 'addpark', component: AddparkComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
