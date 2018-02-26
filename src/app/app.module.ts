import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { MenuComponent } from './data/menu/menu.component';
import { IncidentlistComponent } from './data/content/incidentlist/incidentlist.component';
import {IncidentService} from './service/incident.service';
import {Routes} from '@angular/router';
import { HomeComponent } from './data/content/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'incidents', component: IncidentlistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    IncidentlistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IncidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
