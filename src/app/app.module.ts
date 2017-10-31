import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heros.component';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: 'heroes',
          component: HeroesComponent
        }
      ])
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
