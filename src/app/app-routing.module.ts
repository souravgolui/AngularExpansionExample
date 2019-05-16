import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpandComponent } from './expand/expand.component';
import { NextComponent } from './next/next.component';

const routes: Routes = [
  {path: '', component: ExpandComponent},
  {path: 'next', component: NextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
