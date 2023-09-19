import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { DesscodeComponent } from './desscode/desscode.component';
import { InformacionComponent } from './informacion/informacion.component';

const routes: Routes=[
  {
    path:'video',
    component:VideoComponent
  },
  {
    path:'confirmar',
    component:ConfirmarComponent
  },
  {
    path:'dresscode',
    component:DesscodeComponent
  },
  {
    path:'informacion',
    component:InformacionComponent
  },
  {
    path:'',
    component:VideoComponent
  },
]


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
