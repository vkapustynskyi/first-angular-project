import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesComponent} from './feature/heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from './feature/heroes/hero-detail/hero-detail.component';
import {MessageComponent} from "./feature/message/message.component";
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { DashboardRoutingModule } from './feature/dashboard/dashboard-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
