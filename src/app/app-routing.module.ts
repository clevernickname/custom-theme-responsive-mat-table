import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialExamplesComponent } from './components/material-examples/material-examples.component';

const routes: Routes = [
  { path: 'examples', component: MaterialExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
