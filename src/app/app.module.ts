import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FIGLIOComponent } from './components/figlio/figlio.component';
import { PADREComponent } from './components/padre/padre.component';

@NgModule({
  declarations: [
    AppComponent,
    FIGLIOComponent,
    PADREComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
