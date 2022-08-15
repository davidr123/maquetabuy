import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { BootstrComponent } from './pages/bootstr/bootstr.component';

const routes: Routes = [
  {path:'prueba', component:PruebaComponent},
  {path:'boot', component:BootstrComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
