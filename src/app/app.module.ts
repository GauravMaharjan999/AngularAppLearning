import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TutorListComponent } from './tutor-list/tutor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TutorListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
