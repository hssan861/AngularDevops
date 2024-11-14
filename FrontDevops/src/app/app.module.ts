import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChambreListComponent } from '../chambre-list/chambre-list.component';
import { ChambreAddComponent } from '../chambre-add/chambre-add.component';
import { ChambreEditComponent } from '../chambre-edit/chambre-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChambreListComponent,
    ChambreAddComponent,
    ChambreEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
