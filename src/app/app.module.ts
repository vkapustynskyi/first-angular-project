import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesComponent} from './feature/heroes/heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from './feature/heroes/hero-detail/hero-detail.component';
import {MessageComponent} from "./feature/message/message.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
