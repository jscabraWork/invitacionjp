import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { DesscodeComponent } from './desscode/desscode.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { VideoComponent } from './video/video.component';
import { SliderComponent } from './desscode/slider/slider.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformacionComponent,
    DesscodeComponent,
    ConfirmarComponent,
    VideoComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
