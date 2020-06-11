import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaterialExamplesComponent } from './components/material-examples/material-examples.component';
import { ResponsiveTablesComponent } from './containers/responsive-tables/responsive-tables.container';
import { NumbersonlyInputComponent } from './components/numbersonly-input/numbersonly-input.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'examples', component: MaterialExamplesComponent },
  { path: 'tables', component: ResponsiveTablesComponent },
  { path: 'numbersonly', component: NumbersonlyInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
