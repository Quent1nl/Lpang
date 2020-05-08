import { ApiModule } from './swagger/api.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BurgerComponent } from './burger/burger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    BurgerDetailComponent,
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
    MatListModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
