import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { UncertainComponent } from './uncertain/uncertain.component';

const routes: Routes = [
  {path: 'master', component: MasterComponent},
  {path: '', redirectTo: 'master', pathMatch: 'full'},
  {path: 'uncertain', component: UncertainComponent},
  {path: '**', redirectTo: 'uncertain'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
