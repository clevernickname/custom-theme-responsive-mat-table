import { AngularMaterialModule } from './angular-material-module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicTableComponent } from './components/tables/basic-table/basic-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MaterialExamplesComponent } from './components/material-examples/material-examples.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NumberDirective } from './numbersonly.directive';
import { NumbersonlyInputComponent } from './components/numbersonly-input/numbersonly-input.component';
import { PaginatedTableComponent } from './components/tables/paginated-table/paginated-table.component';
import { ResponsiveTablesComponent } from './containers/responsive-tables/responsive-tables.container';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    HomeComponent,
    MaterialExamplesComponent,
    NavbarComponent,
    NumberDirective,
    NumbersonlyInputComponent,
    PaginatedTableComponent,
    ResponsiveTablesComponent,
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
